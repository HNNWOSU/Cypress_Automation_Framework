import { generate } from "multiple-cucumber-html-reporter";

generate({
  jsonDir: "cypress/reports/cucumber-json/",
  reportPath: "cypress/reports/html-multi-report/",
  ignoreBadJsonFile: true,
  displayReportTime: true,
  displayDuration: true,
  metadata: {
    device: "Local test machine.",
    platform: { name: "Mac", version: "18.5" },
  },
});
