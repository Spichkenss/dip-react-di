import { Container } from "inversify";
import { INJECTION_TOKENS } from "../../../../shared/lib/di/tokens";
import type { IUserRepository } from "../../model/user.types";
import { UserMockApi } from "../../model/api/user-api.mock";
import { render, screen, waitFor } from "@testing-library/react";
import { DiProvider } from "../../../../shared/lib/di";
import { UsersListEntry } from "./users-list.entry";

describe("UsersListEntry", () => {
  let container: Container;

  beforeEach(() => {
    container = new Container();

    container
      .bind<IUserRepository>(INJECTION_TOKENS.USER_API)
      .to(UserMockApi)
      .inSingletonScope();
  });

  test("renders users from UserMockApi", async () => {
    render(
      <DiProvider container={container}>
        <UsersListEntry />
      </DiProvider>
    );

    await waitFor(() =>
      expect(screen.getByTestId("users-list")).toBeInTheDocument()
    );
  });
});
