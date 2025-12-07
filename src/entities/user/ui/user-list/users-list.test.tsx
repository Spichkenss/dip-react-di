import { Container } from "inversify";
import { INJECTION_TOKENS } from "../../../../shared/lib/di/tokens";
import { UserMockApi } from "../../model/api/user-api.mock";
import { render, screen, waitFor } from "@testing-library/react";
import { DiProvider } from "../../../../shared/lib/di";
import { UsersListEntry } from "./users-list.entry";
import { createContainer } from "../../../../shared/lib/di/create-container";
import { createContainerModule } from "../../../../shared/lib/di/create-container-module";

describe("UsersListEntry", () => {
  let container: Container;

  beforeAll(() => {
    const userModule = createContainerModule((options) => {
      options
        .bind(INJECTION_TOKENS.USER_API)
        .to(UserMockApi)
        .inSingletonScope();
    });
    container = createContainer((container) => {
      container.load(userModule);
    });
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
