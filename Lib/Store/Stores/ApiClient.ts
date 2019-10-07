import {Store, StoreProps} from "../RootStore";
import {ObservableStore} from "../RootStore";
import {observable, action} from "mobx";
import axios from "axios";
import {apiKey} from "../../config";
import {createObservableArray} from "mobx/lib/internal";

console.log(apiKey);

export class ApiClient {
  store: ObservableStore;
  constructor(store: ObservableStore) {
    this.store = store;
  }
  private headers = {"Content-Type": "application/json"};
  private testUrl =
    "https://developer.nrel.gov/api/alt-fuel-stations/v1/nearest.json?api_key=P2pOJDqHFBScOFuPx26zBUZVVixaaXoUIabeNSma&location=Denver+CO";
  //   private url = api;
  info = "";
  private testQuery = "apple";
  private maxResults = 1;
  private offset = 0;
  private format = "format=json";

  private testURL2 = `http://api.nal.usda.gov/fdc/v1/search?${this.format}&q=${this.testQuery}&max=${this.maxResults}&offset=${this.offset}&${apiKey}`;
  // private testURL2 = `http://api.nal.usda.gov/ndb/search/?format=json&q=whiskey&max=50&offset=0&api_key=P2pOJDqHFBScOFuPx26zBUZVVixaaXoUIabeNSma`;

  getInfo = async (): Promise<any> =>
    await axios({
      method: "get",
      url: this.testURL2,
      headers: this.headers
    }).then(text => {
      console.log(text.data);
      this.info = text as any;
    });

  // axios
  //   .get(this.testURL2, {params: {generalSearchInput: "raw +broccoli"}
  // .headers})

  //   .then(function(response) {
  //     console.log("response");
  //     console.log(response);
  //     this.info = response;
  //   })
  //   .catch(function(error) {
  //     console.log(error);
  //   });
}
