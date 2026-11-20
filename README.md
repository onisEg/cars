# RentCars

A car discovery frontend with a marketing homepage, a searchable vehicle catalogue and detail pages populated from FreeTestAPI.

[Open the live demo](https://cars-mocha-phi.vercel.app/) · [View screenshot](https://raw.githubusercontent.com/onisEg/resume/23df91e50f87b60e1360d79edcc24cf77eb09b07/public/projects/rent-cars.webp)

## Searching the catalogue

1. Open the cars list to request the catalogue from `freetestapi.com/api/v1/cars`. The search field filters the downloaded array by make or model, case-insensitively.
2. Results are divided into pages of eight on the client. Typing a new query resets the current page to one before slicing the matching cars.
3. Opening a vehicle detail requests `/api/v1/cars/{id}`. The detail view therefore depends on service availability even when the list has already loaded.

## Run locally

Use Node.js 22.12 or later and npm. From the repository root, run:

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite. To build the distributable files in `dist/`, run `npm run build`. To serve that build locally, run `npm run preview`.

## Source guide

| File or directory | What to look for |
| --- | --- |
| [src/components/Cars/Cars.jsx](src/components/Cars/Cars.jsx) | Catalogue request, search term and page slicing. |
| [src/components/pagination](src/components/pagination) | Page navigation controls. |
| [src/components/ProductDetails/ProductDetails.jsx](src/components/ProductDetails/ProductDetails.jsx) | Fetches the vehicle selected by ID. |
| [src/components/Home](src/components/Home) | Composes the landing page. |

## Manual walkthrough

Open page two if enough cars are returned. Search for a make from the first page and confirm that pagination resets. Clear the search and open one result. If no cars appear, inspect the external list request before investigating the search filter.

## Project screenshots

![image](https://github.com/user-attachments/assets/7c1612ec-d0f2-438d-a930-a576b4b9b674)

![image](https://github.com/user-attachments/assets/4c967391-e4d4-41bf-86f7-319704a7b9e4)
