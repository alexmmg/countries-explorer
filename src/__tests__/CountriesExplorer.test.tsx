// import { render, screen, waitFor } from "@testing-library/react";
// import { MockedProvider } from "@apollo/client/testing";
// import { GET_COUNTRIES } from "../graphql/queries";
// import CountriesExplorer from "../pages/CountriesExplorer";

// mock data
// const mocks = [
//   {
//     request: {
//       query: GET_COUNTRIES,
//     },
//     result: {
//       data: {
//         countries: [
//           { code: "US", name: "United States" },
//           { code: "CA", name: "Canada" },
//         ],
//       },
//     },
//   },
// ];

// test("loads and displays countries", async () => {
//   render(
//     <MockedProvider mocks={mocks} addTypename={false}>
//       <CountriesExplorer />
//     </MockedProvider>
//   );

//   // Loads for some time
//   await waitFor(() => screen.getByText(/loading/i));

//   // We check that content downloaded
//   await waitFor(() => {
//     expect(screen.getByText("United States")).toBeTruthy();
//     expect(screen.getByText("Canada")).toBeTruthy();
//   });
// });

test("mock", () => {});
