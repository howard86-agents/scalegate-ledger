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
      isLiveData: false,
      kind: "presentation-fixture",
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
        detail: "其中 17 車次已完成",
        label: "今日進場",
        unit: "車次",
        value: "28",
      },
      {
        detail: "靜態展示資料",
        label: "累計淨重",
        unit: "公噸",
        value: "186.4",
      },
      {
        detail: "最久等待 12 分鐘",
        label: "待處理例外",
        unit: "筆",
        value: "3",
      },
    ]);

    expect(presentationFixtureWeightChargeSummary).toEqual({
      charge: { label: "試算金額", unit: "NT$", value: "8,624" },
      disclaimer:
        "僅示意人員覆核後的重量與費率結果，不代表已連接地磅、開立發票或完成付款。",
      gross: { label: "毛重", unit: "t", value: "18.62" },
      net: { label: "淨重", unit: "t", value: "10.78" },
      tare: { label: "皮重", unit: "t", value: "7.84" },
    });

    expect(presentationFixtureLandfillSummary).toEqual([
      { label: "作業單元", value: "A 區・第 2 期・第 4 層" },
      { label: "今日填埋量", value: "1,240 m³" },
      { label: "覆土紀錄", value: "待日結確認" },
      { label: "人員／機具", value: "8 人・5 台" },
    ]);

    expect(presentationFixtureExceptions).toEqual([
      {
        detail: "保留原始紀錄，等待具權限人員補充原因與處置。",
        title: "SG-0713-039・車次資料不完整",
      },
      {
        detail: "日結前須完成測量來源與覆核狀態。",
        title: "每日覆土紀錄待確認",
      },
    ]);
  });
});
