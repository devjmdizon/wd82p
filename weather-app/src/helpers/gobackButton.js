import fetchData from "./src/helpers/fetchData";
import displayData from "./src/helpers/displayData";
import closeBox from "./src/helpers/closeBox";
import opendescriptionBox from "./src/helpers/opendescriptionBox";

export default function gobackButton() {
  window.history.back();
  window.location.reload();
}
