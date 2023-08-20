import "@testing-library/jest-dom";
import { fireEvent, render, waitFor } from "@testing-library/react";
import { Body } from "../Body";
import { Provider } from "react-redux";
import store from "../Utils/store";
import { StaticRouter } from "react-router-dom/server";
import { MENU_DATA } from "../../mocks/data";
import RestaurantMenu from "../RestaurantMenu";
import { Header } from "../Header";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MENU_DATA);
    },
  });
});

test("Menu should be added to cart", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
        <RestaurantMenu />
      </Provider>
    </StaticRouter>
  );
  //   console.log(body);

  await waitFor(() => expect(body.getByTestId("menu")));
  // const shimmer = body.getByTestId("shimmer");
  // console.log(shimmer);
  //   expect(shimmer.children).toBeInTheDocument()

  const addBtn = body.getByTestId("add-btn");
  fireEvent.click(addBtn);
  const cart = body.getByTestId("cart");

  expect(cart.innerHTML).toBe("Cart - 1");
});
