import { rest } from "msw";
import { setupServer } from "msw/node";
import { apiBase } from "../../src/services";

const handlers = [
  rest.get(`${apiBase}character/0`, (req, res, ctx) => res(ctx.status(500))),
  rest.get(`${apiBase}character/`, (req, res, ctx) => {
    const characterId = req.url.searchParams.get("name");

    return res(
      ctx.status(200),
      ctx.json({
        id: 102,
        name: "Donna Gueterman",
        status: "Dead",
        species: "Robot",
        type: "",
        gender: "Female",
        origin: {
          name: "unknown",
          url: "",
        },
        location: {
          name: "Planet Squanch",
          url: "https://rickandmortyapi.com/api/location/35",
        },
        image: "https://rickandmortyapi.com/api/character/avatar/102.jpeg",
        episode: ["https://rickandmortyapi.com/api/episode/21"],
        url: "https://rickandmortyapi.com/api/character/102",
        created: "2017-12-01T12:21:21.357Z",
      })
    );
  }),

  rest.get(`${apiBase}character/101`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: 101,
        name: "E. Coli",
        status: "Dead",
        species: "Disease",
        type: "",
        gender: "unknown",
        origin: {
          name: "Anatomy Park",
          url: "https://rickandmortyapi.com/api/location/5",
        },
        location: {
          name: "Anatomy Park",
          url: "https://rickandmortyapi.com/api/location/5",
        },
        image: "https://rickandmortyapi.com/api/character/avatar/101.jpeg",
        episode: ["https://rickandmortyapi.com/api/episode/3"],
        url: "https://rickandmortyapi.com/api/character/101",
        created: "2017-12-01T12:03:31.433Z",
      })
    );
  }),

  // Episode

  rest.get(`${apiBase}episode/0`, (req, res, ctx) => res(ctx.status(500))),

  rest.get(`${apiBase}episode/1`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: 27,
        name: "Rest and Ricklaxation",
        air_date: "August 27, 2017",
        episode: "S03E06",
        characters: [
          "https://rickandmortyapi.com/api/character/1",
          "https://rickandmortyapi.com/api/character/2",
          "https://rickandmortyapi.com/api/character/3",
          "https://rickandmortyapi.com/api/character/4",
          "https://rickandmortyapi.com/api/character/6",
          "https://rickandmortyapi.com/api/character/124",
          "https://rickandmortyapi.com/api/character/170",
          "https://rickandmortyapi.com/api/character/180",
          "https://rickandmortyapi.com/api/character/181",
          "https://rickandmortyapi.com/api/character/227",
          "https://rickandmortyapi.com/api/character/240",
          "https://rickandmortyapi.com/api/character/246",
          "https://rickandmortyapi.com/api/character/272",
          "https://rickandmortyapi.com/api/character/332",
          "https://rickandmortyapi.com/api/character/360",
          "https://rickandmortyapi.com/api/character/361",
          "https://rickandmortyapi.com/api/character/365",
          "https://rickandmortyapi.com/api/character/470",
          "https://rickandmortyapi.com/api/character/471",
        ],
        url: "https://rickandmortyapi.com/api/episode/27",
        created: "2017-11-10T12:56:36.515Z",
      })
    );
  }),
];

export const server = setupServer(...handlers);
