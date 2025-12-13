import { Container } from "inversify";
import { INJECTION_TOKENS } from "../../../../shared/lib/di/tokens";
import { UserMockApi } from "../../api/user-api.mock";
import { render, screen, waitFor } from "@testing-library/react";
import { DiProvider } from "../../../../shared/lib/di";
import { UsersListEntry } from "./users-list.entry";
import { createContainer } from "../../../../shared/lib/di/create-container";
import { createContainerModule } from "../../../../shared/lib/di/create-container-module";
import { UserService } from "../../model/user.service";
import { Provider } from "react-redux";
import { AppStore, createStore } from "../../../../app/store/store";
import { UserCard } from "../user-card/user-card";

describe("UsersListEntry", () => {
  let container: Container;
  let store: AppStore;

  beforeAll(() => {
    store = createStore();

    const userModule = createContainerModule((options) => {
      options
        .bind(INJECTION_TOKENS.USER_SERVICE)
        .to(UserService)
        .inSingletonScope();

      options
        .bind(INJECTION_TOKENS.USER_REPOSITORY)
        .to(UserMockApi)
        .inSingletonScope();
    });

    container = createContainer((container) => {
      container.load(userModule);
    });
  });

  test("renders users from UserMockApi", async () => {
    render(
      <Provider store={store}>
        <DiProvider container={container}>
          <UsersListEntry renderItem={(user) => <UserCard user={user} />} />
        </DiProvider>
      </Provider>
    );

    await waitFor(() =>
      expect(screen.getByTestId("users-list")).toBeInTheDocument()
    );
  });
});
