import "@testing-library/jest-dom";
import { fireEvent, render, waitFor } from "@testing-library/react";
import { Body } from "../Body";
import { Provider } from "react-redux";
import store from "../Utils/store";
import { StaticRouter } from "react-router-dom/server";
import { RESTAURANT_DATA } from "../../mocks/data";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANT_DATA);
    },
  });
});

test("restaurants should load on homepage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  //   console.log(body);

  await waitFor(() => expect(body.getByTestId("search-btn")));
  // const shimmer = body.getByTestId("shimmer");
  // console.log(shimmer);
  //   expect(shimmer.children).toBeInTheDocument()
  const resList = body.getByTestId("res-list");
  expect(resList.children.length).toBe(15);
  // expect(shimmer.children.length).toBe(15);
});

test("input box should be working on homepage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  //   console.log(body);

  await waitFor(() => expect(body.getByTestId("search-btn")));
  // const shimmer = body.getByTestId("shimmer");
  // console.log(shimmer);
  //   expect(shimmer.children).toBeInTheDocument()

  const input = body.getByTestId("input");
  fireEvent.change(input, { target: { value: "Dhokla" } });
  const searchBtn=body.getByTestId("search-btn")
  fireEvent.click(searchBtn)
  const resList = body.getByTestId("res-list");
  expect(resList.children.length).toBe(1);
});
