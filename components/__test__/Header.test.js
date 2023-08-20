import { render } from "@testing-library/react";
import { Header } from "../Header";
import { Provider } from "react-redux";
import store from "../Utils/store";
import { StaticRouter } from "react-router-dom/server";
test("cheecking the loading of logo with rendering of header comp.", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  console.log(header);
  
  const logo=header.getAllByTestId("logo")
  console.log(logo[0])
  expect(logo[0].src).toBe("http://localhost/dummy.png")

});


test("cheecking the loading of logo with rendering of header comp.", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  console.log(header);
  
  const onlineStatus=header.getByTestId("online-status")
  console.log(onlineStatus.innerHTML)
  expect(onlineStatus.innerHTML).toBe("***")

});


test("cheecking the loading of logo with rendering of header comp.", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  console.log(header);
  
  const cart=header.getByTestId("cart")
  console.log(cart.innerHTML)
  expect(cart.innerHTML).toBe("Cart - 0")

});
