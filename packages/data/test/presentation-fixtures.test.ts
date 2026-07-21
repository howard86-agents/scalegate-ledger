import { describe, expect, test } from "bun:test";
import {
  presentationFixtureBoundary,
  presentationFixtureExceptions,
  presentationFixtureLandfillSummary,
  presentationFixtureMetrics,
  presentationFixtureQueue,
  presentationFixtureWeightChargeSummary,
} from "../src";

describe("presentation fixture contract", () => {
  test("publishes the complete static demonstration dataset", () => {
    expect(presentationFixtureBoundary).toEqual({
      kind: "presentation-fixture",
      isLiveData: false,
      notice: "靜態展示資料；不是即時量測、財務紀錄或完成交易。",
    });

    expect(presentationFixtureQueue).toEqual([
      {
        id: "SG-0713-042",
        plate: "KLM-5821",
        state: "等待第一次秤重",
        tone: "info",
      },
      {
        id: "SG-0713-041",
        plate: "BQA-1936",
        state: "場內作業",
        tone: "success",
      },
      {
        id: "SG-0713-039",
        plate: "RCE-7305",
        state: "需人工確認",
        tone: "warning",
      },
    ]);

    expect(presentationFixtureMetrics).toEqual([
      {
        label: "今日進場",
        value: "28",
        unit: "車次",
        detail: "其中 17 車次已完成",
      },
      {
        label: "累計淨重",
        value: "186.4",
        unit: "公噸",
        detail: "靜態展示資料",
      },
      {
        label: "待處理例外",
        value: "3",
        unit: "筆",
        detail: "最久等待 12 分鐘",
      },
    ]);

    expect(presentationFixtureWeightChargeSummary).toEqual({
      gross: { label: "毛重", value: "18.62", unit: "t" },
      tare: { label: "皮重", value: "7.84", unit: "t" },
      net: { label: "淨重", value: "10.78", unit: "t" },
      charge: { label: "試算金額", value: "8,624", unit: "NT$" },
      disclaimer:
        "僅示意人員覆核後的重量與費率結果，不代表已連接地磅、開立發票或完成付款。",
    });

    expect(presentationFixtureLandfillSummary).toEqual([
      { label: "作業單元", value: "A 區・第 2 期・第 4 層" },
      { label: "今日填埋量", value: "1,240 m³" },
      { label: "覆土紀錄", value: "待日結確認" },
      { label: "人員／機具", value: "8 人・5 台" },
    ]);

    expect(presentationFixtureExceptions).toEqual([
      {
        title: "SG-0713-039・車次資料不完整",
        detail: "保留原始紀錄，等待具權限人員補充原因與處置。",
      },
      {
        title: "每日覆土紀錄待確認",
        detail: "日結前須完成測量來源與覆核狀態。",
      },
    ]);
  });
});
