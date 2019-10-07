import {Store, StoreProps} from "../RootStore";
import {ObservableStore} from "../RootStore";
import {observable, action} from "mobx";
import axios from "axios";
import {apiKey, appID} from "../../config";
import {createObservableArray} from "mobx/lib/internal";

console.log(apiKey);

export class ApiClient {
  store: ObservableStore;
  constructor(store: ObservableStore) {
    this.store = store;
  }
  private headers = {
    "x-app-id": appID,
    "x-app-key": apiKey
  };
  info = "";
  private testQuery = "pork";
  private maxResults = 1;
  private offset = 0;
  private format = "format=json";
  private baseURL = "https://trackapi.nutritionix.com/v2/search/instant/";

  private testURL = `${this.baseURL}?query=${this.testQuery}`;

  getInfo = async (): Promise<any> =>
    await axios({
      method: "get",
      url: this.testURL,
      headers: this.headers
    }).then(res => {
      console.log(res.data);
    });

  // axios
  //   .get(this.testURL)

  //   .then(function(response) {
  //     console.log("response");
  //     console.log(response.data);
  //     this.info = response;
  //   })
  //   .catch(function(error) {
  //     console.log(error);
  //   });
}
