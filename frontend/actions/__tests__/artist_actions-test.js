import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as actions from "../artist_actions";
import * as ApiUtil from "../../util/artist_api_util";

import { testArtist } from "../../testUtil/artist_helper";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("actions", () => {
  test("receiveArtists should create an action to receive certain artists", () => {
    const expectedAction = {
      type: actions.RECEIVE_ARTISTS,
      artists: testArtist,
    };

    expect(actions.receiveArtists(testArtist)).toEqual(expectedAction);
  });
});


