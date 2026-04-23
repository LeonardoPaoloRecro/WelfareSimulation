const RAW_SERIES = [
  {
    key: "gdp",
    shortLabel: "Real GDP",
    label: "Real GDP",
    axisLabel: "Real GDP (billions of chained 2017 dollars)",
    unitLabel: "Billions of chained 2017 dollars",
    levelPanel: "billions",
    changePanel: "growth",
    changeKey: "gdpChange",
    color: "#2563eb",
    dash: "solid"
  },
  {
    key: "consumption",
    shortLabel: "Consumption",
    label: "Real personal consumption",
    axisLabel: "Real personal consumption (billions of chained 2017 dollars)",
    unitLabel: "Billions of chained 2017 dollars",
    levelPanel: "billions",
    changePanel: "growth",
    changeKey: "consumptionChange",
    color: "#0f766e",
    dash: "solid"
  },
  {
    key: "gdpPerCapita",
    shortLabel: "GDP per capita",
    label: "Real GDP per capita",
    axisLabel: "Real GDP per capita (chained 2017 dollars)",
    unitLabel: "Dollars",
    levelPanel: "dollars",
    changePanel: "growth",
    changeKey: "gdpPerCapitaChange",
    color: "#4f46e5",
    dash: "solid"
  },
  {
    key: "unemployment",
    shortLabel: "Unemployment",
    label: "Unemployment rate",
    axisLabel: "Unemployment rate (%)",
    unitLabel: "Percent",
    levelPanel: "percent",
    changePanel: "unemployment",
    changeKey: "unemploymentChange",
    color: "#dc5f36",
    dash: "solid"
  },
  {
    key: "gini",
    shortLabel: "Gini index",
    label: "Gini index",
    axisLabel: "Gini index (0-100 scale)",
    unitLabel: "Index points",
    levelPanel: "gini",
    changePanel: "gini",
    changeKey: "giniChange",
    color: "#8b5cf6",
    dash: "solid"
  },
  {
    key: "employment",
    shortLabel: "Employment",
    label: "Employment level",
    axisLabel: "Employment (thousands of persons)",
    unitLabel: "Thousands of people",
    levelPanel: "thousands",
    changePanel: "growth",
    changeKey: "employmentChange",
    color: "#2f9e44",
    dash: "solid"
  },
  {
    key: "government",
    shortLabel: "Government",
    label: "Government consumption and investment",
    axisLabel: "Government spending (billions of chained 2017 dollars)",
    unitLabel: "Billions of chained 2017 dollars",
    levelPanel: "billions",
    changePanel: "growth",
    changeKey: "governmentChange",
    color: "#b7791f",
    dash: "solid"
  }
];

const LEVEL_PANELS = [
  { key: "billions", title: "2017$ bn" },
  { key: "dollars", title: "GDP pc ($)" },
  { key: "thousands", title: "Employment (k)" },
  { key: "percent", title: "Unemp. (%)" },
  { key: "gini", title: "Gini" }
];

const CHANGE_PANELS = [
  { key: "growth", title: "Annual change (%)" },
  { key: "unemployment", title: "Unemp. change (pp)" },
  { key: "gini", title: "Gini change (pts)" }
];

const WARS = [
  { label: "World War II", start: 1941, end: 1945, color: "rgba(17, 17, 17, 0.05)" },
  { label: "Korean War", start: 1950, end: 1953, color: "rgba(17, 17, 17, 0.035)" },
  { label: "Vietnam War", start: 1955, end: 1975, color: "rgba(17, 17, 17, 0.03)" },
  { label: "Gulf War", start: 1990, end: 1991, color: "rgba(17, 17, 17, 0.022)" },
  { label: "Iraq War", start: 2003, end: 2011, color: "rgba(17, 17, 17, 0.026)" }
];

const WAR_MULTIPLIER_WINDOWS = [
  { label: "World War II", startPrev: 1940, end: 1943 },
  { label: "Korean War", startPrev: 1949, end: 1952 },
  { label: "Vietnam War", startPrev: 1964, end: 1967 }
];

const RESULT_WINDOW_FIGURES = [
  { id: "war-window-wwii", toggleGroup: "ww2", label: "World War II", start: 1940, end: 1943, includeFull: false },
  { id: "war-window-korea", toggleGroup: "korea", label: "Korean War", start: 1949, end: 1952, includeFull: false },
  { id: "war-window-vietnam", toggleGroup: "vietnam", label: "Vietnam War", start: 1964, end: 1967, includeFull: true }
];

const DERIVED_COLORS = {
  coreWelfare: "#be185d",
  distributionWelfare: "#7c3aed"
};

const BENCHMARK_COLORS = {
  output: RAW_SERIES[0].color,
  core: DERIVED_COLORS.coreWelfare,
  full: DERIVED_COLORS.distributionWelfare
};

const CHART_FONT = '-apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif';

const DATAPACK_DOWNLOAD_FILE = "Welfare Simulation Macro Datapack USA 1929-2025.xlsx";
const IS_TOUCH_DEVICE =
  typeof window !== "undefined" &&
  (window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 900);

const CORRECTED_GDP_PER_CAPITA = {
  1929: 9781.993479,
  1930: 8854.516224,
  1931: 8222.991732,
  1932: 7116.394170,
  1933: 6987.097014,
  1934: 7693.550465,
  1935: 8320.896421,
  1936: 9334.020444,
  1937: 9753.577860,
  1938: 9357.747513,
  1939: 10027.260297,
  1940: 10808.723599,
  1941: 12601.333299,
  1942: 14819.432184,
  1943: 17103.788695,
  1944: 18242.777706,
  1945: 17866.717540,
  1946: 15630.054555,
  1947: 15157.660129,
  1948: 15512.560886,
  1949: 15161.581555,
  1950: 16145.722214,
  1951: 17151.060214,
  1952: 17548.428545,
  1953: 18069.267409,
  1954: 17651.850485,
  1955: 18580.146246,
  1956: 18642.442242,
  1957: 18693.963216,
  1958: 18247.834264,
  1959: 19189.271430,
  1960: 19373.717636,
  1961: 19543.998341,
  1962: 20425.486345,
  1963: 21010.907960,
  1964: 21915.177943,
  1965: 23049.339706,
  1966: 24287.356486,
  1967: 24683.273369,
  1968: 25639.057461,
  1969: 26182.523986,
  1970: 25927.016019,
  1971: 26444.318103,
  1972: 27537.673046,
  1973: 28816.034755,
  1974: 28399.585908,
  1975: 28063.088513,
  1976: 29295.444289,
  1977: 30343.359278,
  1978: 31685.537736,
  1979: 32329.800517,
  1980: 31938.942407,
  1981: 32429.616043,
  1982: 31542.663312,
  1983: 32688.313527,
  1984: 34751.609904,
  1985: 35881.253491,
  1986: 36782.179694,
  1987: 37714.250719,
  1988: 38934.423866,
  1989: 39984.741059,
  1990: 40306.870083,
  1991: 39833.887899,
  1992: 40771.902413,
  1993: 41446.469500,
  1994: 42694.941759,
  1995: 43427.967009,
  1996: 44654.310471,
  1997: 46195.131728,
  1998: 47825.981530,
  1999: 49667.144452,
  2000: 49955.470947,
  2001: 49918.087300,
  2002: 50286.710138,
  2003: 51243.397354,
  2004: 52721.315972,
  2005: 54058.450251,
  2006: 55035.236367,
  2007: 55582.103708,
  2008: 55134.270195,
  2009: 53253.293782,
  2010: 54279.256339,
  2011: 54732.896055,
  2012: 55580.103800,
  2013: 56368.738220,
  2014: 57372.466756,
  2015: 58632.440136,
  2016: 59272.912285,
  2017: 60347.614421,
  2018: 61814.106564,
  2019: 63111.446211,
  2020: 61175.631790,
  2021: 64837.085929,
  2022: 66096.333210,
  2023: 67478.479877,
  2024: 68700.512189,
  2025: 69789.499188
};

const SIM_FIELDS = [
  {
    key: "year",
    label: "Year",
    note: "Any two-period label you want to compare.",
    step: "1"
  },
  {
    key: "population",
    label: "Population",
    note: "Millions of people, optional.",
    step: "0.01"
  },
  {
    key: "gdp",
    label: "Real GDP",
    note: "Billions of chained 2017 dollars.",
    step: "0.01"
  },
  {
    key: "gdpPerCapita",
    label: "GDP per capita",
    note: "Chained 2017 dollars per person, optional but useful for checks.",
    step: "0.01"
  },
  {
    key: "consumption",
    label: "Real consumption",
    note: "Billions of chained 2017 dollars.",
    step: "0.01"
  },
  {
    key: "unemployment",
    label: "Unemployment rate",
    note: "Percent, for example 5.6.",
    step: "0.01"
  },
  {
    key: "gini",
    label: "Gini index",
    note: "0 to 100, optional for full welfare.",
    step: "0.01"
  },
  {
    key: "employment",
    label: "Employment",
    note: "Thousands of persons.",
    step: "0.01"
  },
  {
    key: "government",
    label: "Government spending",
    note: "Billions of chained 2017 dollars.",
    step: "0.01"
  }
];

const SERIES_BY_KEY = new Map(RAW_SERIES.map((series) => [series.key, series]));
const CORRECTED_MACRO_DATA = buildCorrectedMacroData(window.MACRO_DATA);
const YEARS = CORRECTED_MACRO_DATA.map((row) => row.year);
const MIN_YEAR = YEARS[0];
const MAX_YEAR = YEARS[YEARS.length - 1];
const GDP_PER_CAPITA_BASE_YEAR = YEARS[0];
const GDP_PER_CAPITA_TREND_BASE_LOG = Math.log(CORRECTED_MACRO_DATA[0].gdpPerCapita);

const ENRICHED_DATA = buildEnrichedData(CORRECTED_MACRO_DATA);
const YEAR_TO_ROW = new Map(ENRICHED_DATA.map((row) => [row.year, row]));
const WAR_MULTIPLIER_DATA = WAR_MULTIPLIER_WINDOWS.map(calculateWarWindowStats);

const LEVEL_METRICS = [
  { key: "gdp", label: "Real GDP", axisLabel: "Real GDP (billions of chained 2017 dollars)", color: SERIES_BY_KEY.get("gdp").color, formatter: formatBillions },
  { key: "consumption", label: "Consumption", axisLabel: "Consumption (billions of chained 2017 dollars)", color: SERIES_BY_KEY.get("consumption").color, formatter: formatBillions },
  { key: "gdpPerCapita", label: "GDP per capita", axisLabel: "GDP per capita (chained 2017 dollars)", color: SERIES_BY_KEY.get("gdpPerCapita").color, formatter: formatDollars0 },
  { key: "unemployment", label: "Unemployment rate", axisLabel: "Unemployment rate (%)", color: SERIES_BY_KEY.get("unemployment").color, formatter: formatPercent },
  { key: "gini", label: "Gini index", axisLabel: "Gini index (0-100 scale)", color: SERIES_BY_KEY.get("gini").color, formatter: formatGini },
  { key: "employment", label: "Employment", axisLabel: "Employment (thousands of persons)", color: SERIES_BY_KEY.get("employment").color, formatter: formatThousands },
  { key: "government", label: "Government spending", axisLabel: "Government spending (billions of chained 2017 dollars)", color: SERIES_BY_KEY.get("government").color, formatter: formatBillions },
  { key: "coreWelfare", label: "Core welfare", axisLabel: "Core welfare (log index)", color: DERIVED_COLORS.coreWelfare, formatter: formatIndexNumber },
  { key: "distributionWelfare", label: "Full welfare", axisLabel: "Full welfare (log index)", color: DERIVED_COLORS.distributionWelfare, formatter: formatIndexNumber }
];

const CHANGE_METRICS = [
  { key: "gdpChange", label: "GDP growth", axisLabel: "GDP growth (%)", color: SERIES_BY_KEY.get("gdp").color, formatter: formatSignedPercent },
  { key: "consumptionChange", label: "Consumption growth", axisLabel: "Consumption growth (%)", color: SERIES_BY_KEY.get("consumption").color, formatter: formatSignedPercent },
  { key: "gdpPerCapitaChange", label: "GDP per capita growth", axisLabel: "GDP per capita growth (%)", color: SERIES_BY_KEY.get("gdpPerCapita").color, formatter: formatSignedPercent },
  { key: "unemploymentChange", label: "Unemployment change", axisLabel: "Unemployment change (percentage points)", color: SERIES_BY_KEY.get("unemployment").color, formatter: formatSignedPointChange },
  { key: "giniChange", label: "Gini change", axisLabel: "Gini change (index points)", color: SERIES_BY_KEY.get("gini").color, formatter: formatSignedGiniChange },
  { key: "employmentChange", label: "Employment growth", axisLabel: "Employment growth (%)", color: SERIES_BY_KEY.get("employment").color, formatter: formatSignedPercent },
  { key: "governmentChange", label: "Government growth", axisLabel: "Government growth (%)", color: SERIES_BY_KEY.get("government").color, formatter: formatSignedPercent },
  { key: "coreWelfareChange", label: "Core welfare change", axisLabel: "Core welfare change (log points)", color: DERIVED_COLORS.coreWelfare, formatter: formatSignedIndexNumber },
  { key: "distributionWelfareChange", label: "Full welfare change", axisLabel: "Full welfare change (log points)", color: DERIVED_COLORS.distributionWelfare, formatter: formatSignedIndexNumber }
];

const state = {
  activeView: "us-case",
  visibleKeys: new Set(RAW_SERIES.map((series) => series.key)),
  chartVisibility: {
    multiplier: new Set(["output", "core", "full"]),
    benchmarkDecomposition: new Set(["consumption", "access", "inequality"]),
    longRun: new Set(["gdpPerCapita", "coreWelfare", "unemployment", "government"]),
    welfare: new Set(["gdp", "consumption", "coreWelfare", "distributionWelfare"]),
    ww2: new Set(["gdp", "consumption", "government", "coreWelfare"]),
    korea: new Set(["gdp", "consumption", "government", "coreWelfare"]),
    vietnam: new Set(["gdp", "consumption", "government", "coreWelfare", "distributionWelfare"]),
    simulationComparison: new Set(["output", "core", "full"]),
    simulationDecomposition: new Set(["consumption", "access", "inequality"])
  },
  showWars: true,
  xRange: [MIN_YEAR - 0.5, MAX_YEAR + 0.5],
  chartHeight: IS_TOUCH_DEVICE ? 640 : 760,
  relationMode: "change",
  relationX: "governmentChange",
  relationY: "gdpChange",
  tableQuery: "",
  syncingRange: false
};

const PLOT_CONFIG = {
  responsive: true,
  displaylogo: false,
  scrollZoom: !IS_TOUCH_DEVICE,
  showTips: false,
  displayModeBar: true,
  doubleClick: "reset",
  modeBarButtonsToRemove: ["lasso2d", "select2d", "hoverCompareCartesian"]
};

const MULTIPLIER_PLOT_CONFIG = {
  ...PLOT_CONFIG
};

const CHART_TOGGLE_DEFINITIONS = {
  multiplier: {
    containerId: "multiplier-toggles",
    render: () => renderMultiplierChart(),
    items: [
      { key: "output", label: "dY/dG", color: BENCHMARK_COLORS.output },
      { key: "core", label: "Scaled core", color: BENCHMARK_COLORS.core },
      { key: "full", label: "Scaled full", color: BENCHMARK_COLORS.full }
    ]
  },
  benchmarkDecomposition: {
    containerId: "benchmark-decomposition-toggles",
    render: () => renderBenchmarkDecompositionChart(),
    items: [
      { key: "consumption", label: "Worker consumption", color: SERIES_BY_KEY.get("consumption").color },
      { key: "access", label: "Labor-market access", color: SERIES_BY_KEY.get("employment").color },
      { key: "inequality", label: "Inequality", color: SERIES_BY_KEY.get("gini").color }
    ]
  },
  longRun: {
    containerId: "long-run-toggles",
    render: () => renderLongRunChart(),
    items: [
      { key: "gdpPerCapita", label: "GDP pc", color: SERIES_BY_KEY.get("gdpPerCapita").color },
      { key: "coreWelfare", label: "Core welfare", color: DERIVED_COLORS.coreWelfare },
      { key: "unemployment", label: "Unemployment", color: SERIES_BY_KEY.get("unemployment").color },
      { key: "government", label: "Government", color: SERIES_BY_KEY.get("government").color }
    ]
  },
  welfare: {
    containerId: "welfare-toggles",
    render: () => renderWelfareChart(),
    items: [
      { key: "gdp", label: "GDP", color: SERIES_BY_KEY.get("gdp").color },
      { key: "consumption", label: "Consumption", color: SERIES_BY_KEY.get("consumption").color },
      { key: "coreWelfare", label: "Core welfare", color: DERIVED_COLORS.coreWelfare },
      { key: "distributionWelfare", label: "Full welfare", color: DERIVED_COLORS.distributionWelfare }
    ]
  },
  ww2: {
    containerId: "war-window-wwii-toggles",
    render: () => renderWarWindowChart(RESULT_WINDOW_FIGURES[0]),
    items: [
      { key: "gdp", label: "GDP", color: SERIES_BY_KEY.get("gdp").color },
      { key: "consumption", label: "Consumption", color: SERIES_BY_KEY.get("consumption").color },
      { key: "government", label: "Government", color: SERIES_BY_KEY.get("government").color },
      { key: "coreWelfare", label: "Core welfare", color: DERIVED_COLORS.coreWelfare }
    ]
  },
  korea: {
    containerId: "war-window-korea-toggles",
    render: () => renderWarWindowChart(RESULT_WINDOW_FIGURES[1]),
    items: [
      { key: "gdp", label: "GDP", color: SERIES_BY_KEY.get("gdp").color },
      { key: "consumption", label: "Consumption", color: SERIES_BY_KEY.get("consumption").color },
      { key: "government", label: "Government", color: SERIES_BY_KEY.get("government").color },
      { key: "coreWelfare", label: "Core welfare", color: DERIVED_COLORS.coreWelfare }
    ]
  },
  vietnam: {
    containerId: "war-window-vietnam-toggles",
    render: () => renderWarWindowChart(RESULT_WINDOW_FIGURES[2]),
    items: [
      { key: "gdp", label: "GDP", color: SERIES_BY_KEY.get("gdp").color },
      { key: "consumption", label: "Consumption", color: SERIES_BY_KEY.get("consumption").color },
      { key: "government", label: "Government", color: SERIES_BY_KEY.get("government").color },
      { key: "coreWelfare", label: "Core welfare", color: DERIVED_COLORS.coreWelfare },
      { key: "distributionWelfare", label: "Full welfare", color: DERIVED_COLORS.distributionWelfare }
    ]
  },
  simulationComparison: {
    containerId: "simulation-comparison-toggles",
    render: () => renderSimulationCharts(state.lastSimulationResult),
    items: [
      { key: "output", label: "dY/dG", color: SERIES_BY_KEY.get("gdp").color },
      { key: "core", label: "Core dW/dG", color: DERIVED_COLORS.coreWelfare },
      { key: "full", label: "Full dW/dG", color: DERIVED_COLORS.distributionWelfare }
    ]
  },
  simulationDecomposition: {
    containerId: "simulation-decomposition-toggles",
    render: () => renderSimulationCharts(state.lastSimulationResult),
    items: [
      { key: "consumption", label: "Worker consumption", color: SERIES_BY_KEY.get("consumption").color },
      { key: "access", label: "Employment access", color: SERIES_BY_KEY.get("employment").color },
      { key: "inequality", label: "Inequality", color: SERIES_BY_KEY.get("gini").color }
    ]
  }
};

const FORMULA_FOCUS_COPY = {
  all: "The full welfare measure has three moving parts: private worker consumption, labor-market access, and distribution. The point is simple: output on its own is not enough if consumption is weak, work is not broadly available, or the gains are too concentrated.",
  consumption: "This part captures private worker consumption. If private consumption per worker is weak, welfare is weak even when total output looks strong.",
  access: "This part captures labor-market access. If unemployment rises, labor-market access falls, and welfare falls with it.",
  distribution: "This part captures the inequality adjustment. If gains are more concentrated, this term falls and welfare falls with it."
};

function responsiveHeight(desktop, mobile) {
  return IS_TOUCH_DEVICE ? mobile : desktop;
}

document.addEventListener("DOMContentLoaded", initApp);

function buildCorrectedMacroData(rows) {
  let previousPerCapita = null;

  return rows.map((row) => {
    const correctedSource = CORRECTED_GDP_PER_CAPITA[row.year] ?? row.gdpPerCapita;
    const correctedPerCapita =
      correctedSource === null || correctedSource === undefined ? null : Number(correctedSource.toFixed(2));
    const correctedChange =
      correctedPerCapita !== null && previousPerCapita !== null
        ? Number((((correctedPerCapita - previousPerCapita) / previousPerCapita)).toFixed(11))
        : null;

    const nextRow = {
      ...row,
      gdpPerCapita: correctedPerCapita,
      gdpPerCapitaChange: correctedChange
    };

    previousPerCapita = correctedPerCapita;
    return nextRow;
  });
}

function initApp() {
  initEntryGate();
  renderSeriesButtons();
  initChartToggleControls();
  initViewSwitch();
  initRangeControls();
  initRelationControls();
  initDatasetControls();
  initSimulationForms();
  initSimulationControls();
  initFormulaLens();
  renderInsightCards();
  updateHeroForView();
  syncRangeInputs();
  syncChartHeight();
  updateSelectionSummary();
  renderUSView();
  renderSimulationPlaceholders();
}

function initEntryGate() {
  const gate = document.getElementById("entry-gate");
  if (!gate) {
    return;
  }
  document.body.classList.add("is-gated");
  let dismissed = false;
  const dismiss = () => {
    if (dismissed) {
      return;
    }
    dismissed = true;
    gate.classList.add("is-hidden");
    document.body.classList.remove("is-gated");
    document.removeEventListener("keydown", handleKeydown);
  };
  gate.addEventListener("click", () => {
    dismiss();
  });
  const handleKeydown = (event) => {
    if (event.key === "Enter" || event.key === "Escape" || event.key === " ") {
      dismiss();
    }
  };
  document.addEventListener("keydown", handleKeydown);
}

function initChartToggleControls() {
  Object.entries(CHART_TOGGLE_DEFINITIONS).forEach(([groupKey, config]) => {
    const container = document.getElementById(config.containerId);
    if (!container) {
      return;
    }
    container.innerHTML = "";
    config.items.forEach((item) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "chart-toggle";
      button.dataset.group = groupKey;
      button.dataset.key = item.key;
      button.style.setProperty("--trace-color", item.color);
      button.innerHTML = `
        <span class="chart-toggle__dot" aria-hidden="true"></span>
        <span>${item.label}</span>
      `;
      button.addEventListener("click", () => toggleChartTrace(groupKey, item.key));
      container.appendChild(button);
    });
    syncChartToggleButtons(groupKey);
  });
}

function toggleChartTrace(groupKey, key) {
  const active = state.chartVisibility[groupKey];
  if (!active) {
    return;
  }
  if (active.has(key)) {
    if (active.size === 1) {
      return;
    }
    active.delete(key);
  } else {
    active.add(key);
  }
  syncChartToggleButtons(groupKey);
  CHART_TOGGLE_DEFINITIONS[groupKey]?.render();
}

function syncChartToggleButtons(groupKey) {
  const active = state.chartVisibility[groupKey];
  document.querySelectorAll(`.chart-toggle[data-group="${groupKey}"]`).forEach((button) => {
    const isOn = active?.has(button.dataset.key);
    button.classList.toggle("is-off", !isOn);
    button.setAttribute("aria-pressed", String(Boolean(isOn)));
  });
}

function buildEnrichedData(rows) {
  const baseRows = rows.map((row) => {
    const populationMillions =
      row.gdp !== null && row.gdpPerCapita !== null ? (row.gdp * 1000) / row.gdpPerCapita : null;
    const laborForce = row.unemployment !== null && row.unemployment < 1
      ? row.employment / (1 - row.unemployment)
      : null;
    const coreWelfare =
      row.consumption !== null && row.employment !== null && row.unemployment !== null && row.unemployment < 1
        ? Math.log(row.consumption / row.employment) + Math.log(1 - row.unemployment)
        : null;
    const distributionWelfare =
      coreWelfare !== null && row.gini !== null
        ? coreWelfare + Math.log(1 - row.gini / 100)
        : null;
    const gdpPerCapitaLog = row.gdpPerCapita !== null ? Math.log(row.gdpPerCapita) : null;

    return {
      ...row,
      populationMillions,
      laborForce,
      coreWelfare,
      distributionWelfare,
      gdpPerCapitaLog
    };
  });

  return baseRows.map((row, index) => {
    const prev = index > 0 ? baseRows[index - 1] : null;
    const coreWelfareChange =
      row.coreWelfare !== null && prev && prev.coreWelfare !== null
        ? row.coreWelfare - prev.coreWelfare
        : null;
    const distributionWelfareChange =
      row.distributionWelfare !== null && prev && prev.distributionWelfare !== null
        ? row.distributionWelfare - prev.distributionWelfare
        : null;
    const gdpPerCapitaLogGrowth =
      row.gdpPerCapitaLog !== null && prev && prev.gdpPerCapitaLog !== null
        ? row.gdpPerCapitaLog - prev.gdpPerCapitaLog
        : null;

    return {
      ...row,
      coreWelfareChange,
      distributionWelfareChange,
      gdpPerCapitaLogGrowth
    };
  });
}

function initViewSwitch() {
  document.querySelectorAll("[data-view-target]").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeView = button.dataset.viewTarget;
      updateViewButtons();
      updateHeroForView();
      document.getElementById("view-us-case").hidden = state.activeView !== "us-case";
      document.getElementById("view-simulation").hidden = state.activeView !== "simulation";
      document.getElementById("view-method").hidden = state.activeView !== "method";
      document.getElementById("view-sources").hidden = state.activeView !== "sources";
      if (state.activeView === "us-case") {
        renderUSView();
      }
      if (state.activeView === "simulation") {
        renderSimulationCharts(state.lastSimulationResult || null);
      }
    });
  });
  updateViewButtons();
}

function updateHeroForView() {
  const hero = document.getElementById("page-hero");
  const eyebrow = document.getElementById("hero-eyebrow");
  const description = document.getElementById("hero-description");
  const notes = document.getElementById("hero-notes");

  if (state.activeView === "us-case") {
    hero.classList.remove("is-compact");
    eyebrow.textContent = "INTERACTIVE RESEARCH COMPANION";
    description.hidden = false;
    notes.hidden = false;
    return;
  }

  if (state.activeView === "simulation") {
    hero.classList.add("is-compact");
    eyebrow.textContent = "SIMULATION";
    description.hidden = true;
    notes.hidden = true;
    return;
  }

  if (state.activeView === "sources") {
    hero.classList.add("is-compact");
    eyebrow.textContent = "SOURCES";
    description.hidden = true;
    notes.hidden = true;
    return;
  }

  hero.classList.add("is-compact");
  eyebrow.textContent = "METHOD";
  description.hidden = true;
  notes.hidden = true;
}

function updateViewButtons() {
  document.querySelectorAll("[data-view-target]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.viewTarget === state.activeView);
  });
}

function initFormulaLens() {
  const buttons = Array.from(document.querySelectorAll("[data-formula-focus]"));
  const formula = document.getElementById("formula-showcase");
  const copy = document.getElementById("formula-lens-copy");

  if (!buttons.length || !formula || !copy) {
    return;
  }

  const segments = Array.from(formula.querySelectorAll("[data-segment]"));

  const applyFocus = (focus) => {
    buttons.forEach((button) => {
      button.classList.toggle("is-active", button.dataset.formulaFocus === focus);
    });

    segments.forEach((segment) => {
      const segmentKey = segment.dataset.segment;
      const shouldDim = focus !== "all" && segmentKey !== focus;
      segment.classList.toggle("is-dimmed", shouldDim);
    });

    copy.textContent = FORMULA_FOCUS_COPY[focus] || FORMULA_FOCUS_COPY.all;
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      applyFocus(button.dataset.formulaFocus);
    });
  });

  applyFocus("all");
}

function renderSeriesButtons() {
  const containers = Array.from(document.querySelectorAll('[data-series-toggle-group="explorer"]'));
  containers.forEach((container) => {
    const compact = container.dataset.seriesToggleCompact === "true";
    container.innerHTML = "";

    RAW_SERIES.forEach((series) => {
      const button = document.createElement("button");
      button.type = "button";
      button.dataset.key = series.key;
      button.style.setProperty("--series-color", series.color);
      button.style.setProperty("--trace-color", series.color);
      button.className = compact ? "chart-toggle series-chart-toggle" : "series-toggle";

      if (compact) {
        button.innerHTML = `
          <span class="chart-toggle__dot" aria-hidden="true"></span>
          <span>${series.shortLabel}</span>
        `;
      } else {
        button.innerHTML = `
          <span class="series-toggle__dot" aria-hidden="true"></span>
          <span class="series-toggle__copy">
            <strong>${series.shortLabel}</strong>
            <span>${series.unitLabel}</span>
          </span>
        `;
      }

      button.addEventListener("click", () => {
        if (state.visibleKeys.has(series.key)) {
          state.visibleKeys.delete(series.key);
        } else {
          state.visibleKeys.add(series.key);
        }
        updateSeriesButtons();
        updateSelectionSummary();
        renderUSView();
      });

      container.appendChild(button);
    });
  });

  updateSeriesButtons();
}

function updateSeriesButtons() {
  document.querySelectorAll(".series-toggle, .series-chart-toggle").forEach((button) => {
    const isOn = state.visibleKeys.has(button.dataset.key);
    button.classList.toggle("is-off", !isOn);
    button.setAttribute("aria-pressed", String(isOn));
  });
}

function initRangeControls() {
  document.getElementById("year-start").addEventListener("change", handleRangeInput);
  document.getElementById("year-end").addEventListener("change", handleRangeInput);
  document.getElementById("chart-height").addEventListener("input", (event) => {
    state.chartHeight = Number(event.target.value);
    syncChartHeight();
    renderOverviewChart();
  });
  document.getElementById("war-toggle").addEventListener("click", () => {
    state.showWars = !state.showWars;
    const button = document.getElementById("war-toggle");
    button.classList.toggle("is-active", state.showWars);
    button.textContent = state.showWars ? "War shading on" : "War shading off";
    button.setAttribute("aria-pressed", String(state.showWars));
    renderUSView();
  });
  document.getElementById("reset-range").addEventListener("click", () => {
    state.xRange = [MIN_YEAR - 0.5, MAX_YEAR + 0.5];
    syncRangeInputs();
    updateSelectionSummary();
    renderUSView();
  });
  document.querySelectorAll("[data-range-preset]").forEach((button) => {
    button.addEventListener("click", () => {
      const preset = button.dataset.rangePreset;
      state.xRange = getPresetRange(preset);
      syncRangeInputs();
      updateSelectionSummary();
      renderUSView();
    });
  });
}

function handleRangeInput() {
  const start = Number(document.getElementById("year-start").value);
  const end = Number(document.getElementById("year-end").value);
  if (!Number.isFinite(start) || !Number.isFinite(end)) {
    return;
  }
  const clampedStart = clampYear(start);
  const clampedEnd = clampYear(end);
  state.xRange = [Math.min(clampedStart, clampedEnd) - 0.5, Math.max(clampedStart, clampedEnd) + 0.5];
  syncRangeInputs();
  updateSelectionSummary();
  renderUSView();
}

function getPresetRange(preset) {
  switch (preset) {
    case "depression":
      return [1929 - 0.5, 1939 + 0.5];
    case "ww2":
      return [1940 - 0.5, 1946 + 0.5];
    case "korea":
      return [1949 - 0.5, 1954 + 0.5];
    case "vietnam":
      return [1964 - 0.5, 1976 + 0.5];
    case "modern":
      return [2000 - 0.5, 2025 + 0.5];
    case "full":
    default:
      return [MIN_YEAR - 0.5, MAX_YEAR + 0.5];
  }
}

function syncRangeInputs() {
  document.getElementById("year-start").value = String(Math.round(state.xRange[0] + 0.5));
  document.getElementById("year-end").value = String(Math.round(state.xRange[1] - 0.5));
}

function syncChartHeight() {
  document.documentElement.style.setProperty("--chart-height", `${state.chartHeight}px`);
  document.getElementById("chart-height-value").textContent = `${state.chartHeight} px`;
}

function updateSelectionSummary() {
  const visibleSeries = RAW_SERIES.filter((series) => state.visibleKeys.has(series.key));
  const startYear = Math.round(state.xRange[0] + 0.5);
  const endYear = Math.round(state.xRange[1] - 0.5);
  const summary = [];
  summary.push(`${visibleSeries.length} of ${RAW_SERIES.length} variables visible.`);
  summary.push(
    visibleSeries.length
      ? `Indexed overview: ${visibleSeries.map((series) => series.shortLabel).join(", ")}.`
      : "Choose at least one variable to draw the charts."
  );
  summary.push(`Current window: ${startYear}-${endYear}.`);
  summary.push("Use the variable buttons above each explorer chart to simplify the view.");
  summary.push("In charts with legends, click a legend item to hide or restore a series.");
  summary.push("Drag to zoom, then double-click to reset. Zooming one time-series chart updates the other time-series charts.");
  document.getElementById("selection-summary").textContent = summary.join(" ");
  document.getElementById("insight-window").textContent = `${startYear}-${endYear}`;
}

function initRelationControls() {
  populateRelationMetricSelects();
  document.getElementById("relation-mode").addEventListener("change", (event) => {
    state.relationMode = event.target.value;
    populateRelationMetricSelects();
    renderRelationChart();
  });
  document.getElementById("relation-x").addEventListener("change", (event) => {
    state.relationX = event.target.value;
    renderRelationChart();
  });
  document.getElementById("relation-y").addEventListener("change", (event) => {
    state.relationY = event.target.value;
    renderRelationChart();
  });
}

function populateRelationMetricSelects() {
  const metrics = state.relationMode === "change" ? CHANGE_METRICS : LEVEL_METRICS;
  const xSelect = document.getElementById("relation-x");
  const ySelect = document.getElementById("relation-y");
  const priorX = state.relationX;
  const priorY = state.relationY;

  xSelect.innerHTML = "";
  ySelect.innerHTML = "";

  metrics.forEach((metric) => {
    const xOption = document.createElement("option");
    xOption.value = metric.key;
    xOption.textContent = metric.label;
    xSelect.appendChild(xOption);

    const yOption = document.createElement("option");
    yOption.value = metric.key;
    yOption.textContent = metric.label;
    ySelect.appendChild(yOption);
  });

  if (!metrics.some((metric) => metric.key === priorX)) {
    state.relationX = state.relationMode === "change" ? "governmentChange" : "gdp";
  }
  if (!metrics.some((metric) => metric.key === priorY)) {
    state.relationY = state.relationMode === "change" ? "gdpChange" : "coreWelfare";
  }
  if (state.relationX === state.relationY && metrics.length > 1) {
    state.relationY = metrics[1].key;
  }

  xSelect.value = state.relationX;
  ySelect.value = state.relationY;
}

function initDatasetControls() {
  document.getElementById("dataset-search").addEventListener("input", (event) => {
    state.tableQuery = event.target.value.trim().toLowerCase();
    renderDatasetTable();
  });
  document.getElementById("download-xlsx").addEventListener("click", downloadWorkbook);
  document.getElementById("export-csv").addEventListener("click", exportFullCsv);
  const footerXlsx = document.getElementById("download-xlsx-footer");
  const footerCsv = document.getElementById("export-csv-footer");
  if (footerXlsx) {
    footerXlsx.addEventListener("click", downloadWorkbook);
  }
  if (footerCsv) {
    footerCsv.addEventListener("click", exportFullCsv);
  }
}

function renderInsightCards() {
  document.getElementById("insight-coverage").textContent = `${MIN_YEAR}-${MAX_YEAR}`;
  const row1942 = YEAR_TO_ROW.get(1942);
  document.getElementById("insight-1942").textContent =
    `GDP ${formatSignedPercent(row1942.gdpChange)} vs consumption ${formatSignedPercent(row1942.consumptionChange)}`;
  const ww2 = WAR_MULTIPLIER_DATA[0];
  document.getElementById("insight-ww2").textContent =
    `dY/dG ${formatMultiplier(ww2.outputMultiplier)} vs core dW/dG ${formatMultiplier(ww2.coreWelfareResponse)}`;
}

function renderUSView() {
  renderBenchmarkTable();
  renderLongRunChart();
  renderOverviewChart();
  renderWelfareChart();
  renderMultiplierChart();
  renderBenchmarkDecompositionChart();
  renderWarWindowCharts();
  renderUnitChart();
  renderChangeChart();
  renderRelationChart();
  renderDatasetTable();
  renderGdpPerCapitaTrendChart();
  renderGdpPerCapitaGrowthChart();
}

function renderOverviewChart() {
  const series = RAW_SERIES.filter((item) => state.visibleKeys.has(item.key));
  if (!series.length) {
    renderEmptyChart("overview-chart", "Choose at least one variable to draw the overview.");
    return;
  }

  const traces = series.map((seriesItem) => {
    const indexed = buildWindowIndexedSeries(seriesItem.key, "level");
    return {
      type: "scatter",
      mode: "lines",
      x: YEARS,
      y: indexed.values,
      name: seriesItem.shortLabel,
      line: {
        color: seriesItem.color,
        width: 3.2,
        dash: seriesItem.dash || "solid"
      },
      customdata: indexed.customdata,
      hovertemplate:
        "<b>%{fullData.name}</b><br>%{x}<br>%{customdata[0]}<br>Raw value: %{customdata[1]}<extra></extra>",
      connectgaps: false
    };
  });

  const layout = buildSingleChartLayout({
    height: state.chartHeight,
    yTitle: "Index (first visible year = 100)",
    showLegend: true,
    shapes: [
      ...buildWarShapes("x"),
      {
        type: "line",
        xref: "x",
        yref: "y",
        x0: state.xRange[0],
        x1: state.xRange[1],
        y0: 100,
        y1: 100,
        line: {
          color: "rgba(16, 21, 24, 0.24)",
          width: 1.2
        }
      }
    ]
  });

  layout.legend = {
    orientation: "h",
    y: 1.15,
    x: 0,
    font: { size: 12 }
  };
  layout.xaxis.rangeslider = {
    visible: true,
    bgcolor: "rgba(16, 21, 24, 0.04)",
    bordercolor: "rgba(16, 21, 24, 0.08)"
  };

  Plotly.react("overview-chart", traces, layout, PLOT_CONFIG);
  attachRangeSync("overview-chart");
}

function renderUnitChart() {
  const visibleSeries = RAW_SERIES.filter((series) => state.visibleKeys.has(series.key));
  const panels = LEVEL_PANELS.filter((panel) =>
    visibleSeries.some((series) => series.levelPanel === panel.key)
  );

  if (!panels.length) {
    renderEmptyChart("unit-chart", "Choose at least one variable to draw the raw level chart.");
    return;
  }

  const panelIndex = new Map(panels.map((panel, index) => [panel.key, index + 1]));
  const traces = visibleSeries.map((series) => {
    const rowIndex = panelIndex.get(series.levelPanel);
    return {
      type: "scatter",
      mode: "lines",
      x: YEARS,
      y: ENRICHED_DATA.map((row) => transformLevelValue(series, row[series.key])),
      xaxis: traceAxisRef("x", rowIndex),
      yaxis: traceAxisRef("y", rowIndex),
      name: series.shortLabel,
      line: {
        color: series.color,
        width: 3.1,
        dash: series.dash || "solid"
      },
      customdata: ENRICHED_DATA.map((row) => formatLevelValue(series, row[series.key])),
      hovertemplate: "<b>%{fullData.name}</b><br>%{x}: %{customdata}<extra></extra>",
      connectgaps: false
    };
  });

  const layout = buildMultiRowLayout(panels, {
    height: Math.max(650, panels.length * 280 + 150),
    showZeroLine: false
  });

  Plotly.react("unit-chart", traces, layout, PLOT_CONFIG);
  attachRangeSync("unit-chart");
}

function renderChangeChart() {
  const visibleSeries = RAW_SERIES.filter((series) => state.visibleKeys.has(series.key));
  const panels = CHANGE_PANELS.filter((panel) =>
    visibleSeries.some((series) => series.changePanel === panel.key)
  );

  if (!panels.length) {
    renderEmptyChart("change-chart", "Choose at least one variable to draw the annual-change chart.");
    return;
  }

  const panelIndex = new Map(panels.map((panel, index) => [panel.key, index + 1]));
  const traces = visibleSeries.map((series) => {
    const rowIndex = panelIndex.get(series.changePanel);
    return {
      type: "scatter",
      mode: "lines",
      x: YEARS,
      y: ENRICHED_DATA.map((row) => transformChangeValue(series, row[series.changeKey])),
      xaxis: traceAxisRef("x", rowIndex),
      yaxis: traceAxisRef("y", rowIndex),
      name: series.shortLabel,
      line: {
        color: series.color,
        width: 3,
        dash: series.dash || "solid"
      },
      customdata: ENRICHED_DATA.map((row) => formatChangeValue(series, row[series.changeKey])),
      hovertemplate: "<b>%{fullData.name}</b><br>%{x}: %{customdata}<extra></extra>",
      connectgaps: false
    };
  });

  const layout = buildMultiRowLayout(panels, {
    height: Math.max(700, panels.length * 300 + 160),
    showZeroLine: true
  });

  Plotly.react("change-chart", traces, layout, PLOT_CONFIG);
  attachRangeSync("change-chart");
}

function renderWelfareChart() {
  const chartSeries = [
    { key: "gdp", label: "Real GDP", color: SERIES_BY_KEY.get("gdp").color, dash: "solid", formatter: formatBillions },
    { key: "consumption", label: "Consumption", color: SERIES_BY_KEY.get("consumption").color, dash: "solid", formatter: formatBillions },
    { key: "coreWelfare", label: "Core welfare", color: DERIVED_COLORS.coreWelfare, dash: "solid", formatter: formatIndexNumber },
    { key: "distributionWelfare", label: "Full welfare", color: DERIVED_COLORS.distributionWelfare, dash: "solid", formatter: formatIndexNumber }
  ];

  const traces = chartSeries
    .filter((series) => state.chartVisibility.welfare.has(series.key))
    .map((series) => {
    const indexed = buildWindowIndexedSeries(series.key, series.key.includes("Welfare") ? "derived" : "level");
    return {
      type: "scatter",
      mode: "lines",
      x: YEARS,
      y: indexed.values,
      name: series.label,
      line: {
        color: series.color,
        width: 3,
        dash: series.dash
      },
      customdata: indexed.customdata,
      hovertemplate:
        "<b>%{fullData.name}</b><br>%{x}<br>%{customdata[0]}<br>Raw value: %{customdata[1]}<extra></extra>",
      connectgaps: false
    };
  });

  if (!traces.length) {
    renderEmptyChart("welfare-chart", "Keep at least one welfare-series line visible.");
    return;
  }

  const layout = buildSingleChartLayout({
    height: responsiveHeight(420, 360),
    yTitle: "Index (first visible year = 100)",
    showLegend: true,
    shapes: [
      ...buildWarShapes("x"),
      {
        type: "line",
        xref: "x",
        yref: "y",
        x0: state.xRange[0],
        x1: state.xRange[1],
        y0: 100,
        y1: 100,
        line: {
          color: "rgba(16, 21, 24, 0.22)",
          width: 1.1
        }
      }
    ]
  });

  layout.legend = {
    orientation: "h",
    y: 1.16,
    x: 0,
    font: { size: 11 }
  };

  Plotly.react("welfare-chart", traces, layout, PLOT_CONFIG);
  attachRangeSync("welfare-chart");
}

function renderMultiplierChart() {
  const x = WAR_MULTIPLIER_DATA.map((item) => item.label);
  const traceDescriptors = [
    {
      key: "output",
      trace: {
        type: "bar",
        x,
        y: WAR_MULTIPLIER_DATA.map((item) => item.outputMultiplier),
        name: "dY/dG",
        marker: {
          color: BENCHMARK_COLORS.output,
          line: { color: "rgba(16, 21, 24, 0.12)", width: 0.7 }
        },
        hovertemplate: "<b>%{x}</b><br>dY/dG: %{y:.3f}<extra></extra>"
      }
    },
    {
      key: "core",
      trace: {
        type: "bar",
        x,
        y: WAR_MULTIPLIER_DATA.map((item) => item.coreWelfareScaled),
        name: "Scaled core comparison",
        marker: {
          color: BENCHMARK_COLORS.core,
          line: { color: "rgba(16, 21, 24, 0.12)", width: 0.7 }
        },
        hovertemplate: "<b>%{x}</b><br>Scaled core comparison: %{y:.3f}<extra></extra>"
      }
    },
    {
      key: "full",
      trace: {
        type: "bar",
        x,
        y: WAR_MULTIPLIER_DATA.map((item) => item.distributionWelfareScaled),
        name: "Scaled full comparison",
        marker: {
          color: BENCHMARK_COLORS.full,
          line: { color: "rgba(16, 21, 24, 0.12)", width: 0.7 }
        },
        hovertemplate: "<b>%{x}</b><br>Scaled full comparison: %{y:.3f}<extra></extra>"
      }
    }
  ];
  const traces = traceDescriptors
    .filter((item) => state.chartVisibility.multiplier.has(item.key))
    .map((item) => item.trace);

  if (!traces.length) {
    renderEmptyChart("multiplier-chart", "Keep at least one benchmark series visible.");
    return;
  }

  const layout = {
    barcornerradius: 8,
    bargap: 0.32,
    bargroupgap: 0.16,
    paper_bgcolor: "rgba(0,0,0,0)",
    plot_bgcolor: "#ffffff",
    margin: {
      l: 76,
      r: 22,
      t: 24,
      b: 68
    },
    height: responsiveHeight(430, 380),
    font: {
      family: CHART_FONT,
      color: "#101518",
      size: 12
    },
    hoverlabel: {
      bgcolor: "#ffffff",
      bordercolor: "rgba(16, 21, 24, 0.12)",
      font: {
        family: CHART_FONT,
        size: 12,
        color: "#101518"
      }
    },
    legend: {
      orientation: "h",
      y: 1.15,
      x: 0,
      bgcolor: "rgba(255,255,255,0.94)",
      bordercolor: "rgba(16, 21, 24, 0.06)",
      borderwidth: 1,
      font: {
        family: CHART_FONT,
        size: 12,
        color: "#101518"
      }
    },
    xaxis: {
      type: "category",
      categoryorder: "array",
      categoryarray: x,
      showgrid: false,
      zeroline: false,
      tickfont: { family: CHART_FONT, size: 12, color: "#4d4d4d" },
      automargin: true
    },
    yaxis: {
      title: {
        text: "dY/dG or scaled welfare comparison",
        font: { family: CHART_FONT, size: 13, color: "#101518" }
      },
      showgrid: true,
      gridcolor: "rgba(16, 21, 24, 0.07)",
      zeroline: true,
      zerolinecolor: "rgba(16, 21, 24, 0.14)",
      tickfont: { family: CHART_FONT, size: 12, color: "#4d4d4d" },
      automargin: true
    },
    annotations: []
  };

  Plotly.react("multiplier-chart", traces, layout, MULTIPLIER_PLOT_CONFIG);
}

function renderBenchmarkDecompositionChart() {
  const host = document.getElementById("benchmark-decomposition-chart");
  if (!host) {
    return;
  }

  const x = WAR_MULTIPLIER_DATA.map((item) => item.label);
  const decompositionDescriptors = [
    {
      key: "consumption",
      trace: {
        type: "bar",
        x,
        y: WAR_MULTIPLIER_DATA.map((item) => item.consumptionContribution),
        name: "Worker consumption",
        marker: { color: SERIES_BY_KEY.get("consumption").color },
        hovertemplate: "<b>%{x}</b><br>Worker consumption contribution: %{y:.4f} log points<extra></extra>"
      }
    },
    {
      key: "access",
      trace: {
        type: "bar",
        x,
        y: WAR_MULTIPLIER_DATA.map((item) => item.accessContribution),
        name: "Labor-market access",
        marker: { color: SERIES_BY_KEY.get("employment").color },
        hovertemplate: "<b>%{x}</b><br>Labor-market access contribution: %{y:.4f} log points<extra></extra>"
      }
    },
    {
      key: "inequality",
      trace: {
        type: "bar",
        x,
        y: WAR_MULTIPLIER_DATA.map((item) => item.inequalityContribution),
        name: "Inequality adjustment",
        marker: { color: SERIES_BY_KEY.get("gini").color },
        hovertemplate:
          "<b>%{x}</b><br>Inequality contribution: %{y:.4f} log points<extra></extra>"
      }
    }
  ];
  const decompositionTraces = decompositionDescriptors
    .filter((item) => state.chartVisibility.benchmarkDecomposition.has(item.key))
    .map((item) => item.trace);

  if (!decompositionTraces.length) {
    renderEmptyChart("benchmark-decomposition-chart", "Keep at least one welfare contribution visible.");
    return;
  }

  const layout = {
    barmode: "relative",
    barcornerradius: 8,
    paper_bgcolor: "rgba(0,0,0,0)",
    plot_bgcolor: "#ffffff",
    margin: { l: 82, r: 18, t: 22, b: 62 },
    height: responsiveHeight(420, 380),
    font: {
      family: CHART_FONT,
      color: "#101518"
    },
    hoverlabel: {
      bgcolor: "#ffffff",
      bordercolor: "rgba(16, 21, 24, 0.12)",
      font: {
        family: CHART_FONT,
        size: 12,
        color: "#101518"
      }
    },
    legend: {
      orientation: "h",
      y: 1.14,
      x: 0,
      bgcolor: "rgba(255,255,255,0.94)",
      bordercolor: "rgba(16,21,24,0.06)",
      borderwidth: 1,
      font: {
        family: CHART_FONT,
        size: 11,
        color: "#101518"
      }
    },
    xaxis: {
      showgrid: false,
      zeroline: false,
      tickfont: { family: CHART_FONT, size: 12, color: "#4d4d4d" },
      automargin: true
    },
    yaxis: {
      title: { text: "Log-point contribution to welfare change (ΔW)", font: { family: CHART_FONT, size: 12, color: "#101518" } },
      showgrid: true,
      gridcolor: "rgba(16, 21, 24, 0.08)",
      zeroline: true,
      zerolinecolor: "rgba(16, 21, 24, 0.16)",
      tickfont: { family: CHART_FONT, size: 11, color: "#4d4d4d" },
      automargin: true
    },
    annotations: []
  };

  Plotly.react("benchmark-decomposition-chart", decompositionTraces, layout, MULTIPLIER_PLOT_CONFIG);
}

function renderWarWindowCharts() {
  RESULT_WINDOW_FIGURES.forEach((windowSpec) => {
    renderWarWindowChart(windowSpec);
  });
}

function renderWarWindowChart(windowSpec) {
  const host = document.getElementById(windowSpec.id);
  if (!host) {
    return;
  }

  const rows = ENRICHED_DATA.filter((row) => row.year >= windowSpec.start && row.year <= windowSpec.end);
  const baseGdp = rows[0]?.gdp ?? null;
  const baseConsumption = rows[0]?.consumption ?? null;
  const baseGovernment = rows[0]?.government ?? null;
  const baseCore = rows[0]?.coreWelfare ?? null;
  const baseFull = windowSpec.includeFull ? rows[0]?.distributionWelfare ?? null : null;

  if (!rows.length || baseCore === null) {
    renderEmptyChart(windowSpec.id, "Window data unavailable.");
    return;
  }

  const traceDescriptors = [
    {
      key: "gdp",
      trace: {
        type: "scatter",
        mode: "lines",
        x: rows.map((row) => row.year),
        y: rows.map((row) => (baseGdp ? (row.gdp / baseGdp) * 100 : null)),
        name: "Real GDP",
        line: { color: SERIES_BY_KEY.get("gdp").color, width: 3.1, dash: "solid" },
        customdata: rows.map((row) => formatBillions(row.gdp)),
        hovertemplate: "<b>Real GDP</b><br>%{x}<br>Index: %{y:.1f}<br>Raw level: %{customdata}<extra></extra>"
      }
    },
    {
      key: "consumption",
      trace: {
        type: "scatter",
        mode: "lines",
        x: rows.map((row) => row.year),
        y: rows.map((row) => (baseConsumption ? (row.consumption / baseConsumption) * 100 : null)),
        name: "Private consumption",
        line: { color: SERIES_BY_KEY.get("consumption").color, width: 3.1, dash: "solid" },
        customdata: rows.map((row) => formatBillions(row.consumption)),
        hovertemplate: "<b>Private consumption</b><br>%{x}<br>Index: %{y:.1f}<br>Raw level: %{customdata}<extra></extra>"
      }
    },
    {
      key: "government",
      trace: {
        type: "scatter",
        mode: "lines",
        x: rows.map((row) => row.year),
        y: rows.map((row) => (baseGovernment ? (row.government / baseGovernment) * 100 : null)),
        name: "Government spending",
        line: { color: SERIES_BY_KEY.get("government").color, width: 3.1, dash: "solid" },
        customdata: rows.map((row) => formatBillions(row.government)),
        hovertemplate: "<b>Government spending</b><br>%{x}<br>Index: %{y:.1f}<br>Raw level: %{customdata}<extra></extra>"
      }
    },
    {
      key: "coreWelfare",
      trace: {
        type: "scatter",
        mode: "lines",
        x: rows.map((row) => row.year),
        y: rows.map((row) => Math.exp(row.coreWelfare - baseCore) * 100),
        name: "Core welfare",
        line: { color: DERIVED_COLORS.coreWelfare, width: 3.1, dash: "solid" },
        customdata: rows.map((row) => row.coreWelfare),
        hovertemplate:
          "<b>Core welfare</b><br>%{x}<br>Index: %{y:.1f}<br>Raw level: %{customdata:.4f}<extra></extra>"
      }
    }
  ];

  if (windowSpec.includeFull && baseFull !== null) {
    traceDescriptors.push({
      key: "distributionWelfare",
      trace: {
        type: "scatter",
        mode: "lines",
        x: rows.map((row) => row.year),
        y: rows.map((row) => row.distributionWelfare === null ? null : Math.exp(row.distributionWelfare - baseFull) * 100),
        name: "Full welfare",
        line: { color: DERIVED_COLORS.distributionWelfare, width: 3, dash: "solid" },
        customdata: rows.map((row) => row.distributionWelfare),
        hovertemplate:
          "<b>Full welfare</b><br>%{x}<br>Index: %{y:.1f}<br>Raw level: %{customdata:.4f}<extra></extra>",
        connectgaps: false
      }
    });
  }

  const traces = traceDescriptors
    .filter((item) => state.chartVisibility[windowSpec.toggleGroup].has(item.key))
    .map((item) => item.trace);

  if (!traces.length) {
    renderEmptyChart(windowSpec.id, "Keep at least one series visible for this war window.");
    return;
  }

  const layout = {
    height: responsiveHeight(540, 460),
    paper_bgcolor: "rgba(0,0,0,0)",
    plot_bgcolor: "#ffffff",
    margin: { l: 82, r: 24, t: 18, b: 54 },
    font: {
      family: CHART_FONT,
      color: "#101518"
    },
    hovermode: "x unified",
    showlegend: true,
    legend: {
      orientation: "h",
      y: 1.13,
      x: 0,
      bgcolor: "rgba(255,255,255,0.94)",
      bordercolor: "rgba(16,21,24,0.06)",
      borderwidth: 1,
      font: {
        family: CHART_FONT,
        size: 11,
        color: "#101518"
      }
    },
    xaxis: {
      range: [windowSpec.start - 0.2, windowSpec.end + 0.2],
      dtick: 1,
      showgrid: false,
      zeroline: false,
      showline: true,
      linecolor: "rgba(16, 21, 24, 0.16)",
      tickfont: { family: CHART_FONT, size: 11, color: "#4d4d4d" }
    },
    yaxis: {
      title: { text: "Index (window start = 100)", font: { family: CHART_FONT, size: 12, color: "#101518" } },
      showgrid: true,
      gridcolor: "rgba(16, 21, 24, 0.08)",
      zeroline: true,
      zerolinecolor: "rgba(16, 21, 24, 0.16)",
      tickfont: { family: CHART_FONT, size: 11, color: "#4d4d4d" }
    },
    shapes: [
      {
        type: "line",
        xref: "x",
        yref: "y",
        x0: windowSpec.start,
        x1: windowSpec.end,
        y0: 100,
        y1: 100,
        line: {
          color: "rgba(16, 21, 24, 0.18)",
          width: 1.1
        }
      }
    ],
    annotations: []
  };

  Plotly.react(windowSpec.id, traces, layout, PLOT_CONFIG);
}

function renderRelationChart() {
  const metrics = state.relationMode === "change" ? CHANGE_METRICS : LEVEL_METRICS;
  const xMetric = metrics.find((metric) => metric.key === state.relationX) || metrics[0];
  const yMetric = metrics.find((metric) => metric.key === state.relationY) || metrics[1] || metrics[0];

  const points = ENRICHED_DATA
    .filter((row) => isYearVisible(row.year))
    .map((row) => ({
      year: row.year,
      x: row[xMetric.key],
      y: row[yMetric.key],
      war: getWarLabel(row.year)
    }))
    .filter((point) => point.x !== null && point.y !== null);

  if (points.length < 2) {
    renderEmptyChart("relation-chart", "Choose two metrics with enough overlapping data in the visible window.");
    return;
  }

  const xValues = points.map((point) => transformRelationValue(xMetric.key, point.x));
  const yValues = points.map((point) => transformRelationValue(yMetric.key, point.y));
  const regression = linearRegression(xValues, yValues);

  const trace = {
    type: "scatter",
    mode: "markers",
    x: xValues,
    y: yValues,
    text: points.map((point) => String(point.year)),
    customdata: points.map((point) => [point.year, point.war || "Peace"]),
    marker: {
      size: 8.5,
      color: "#3c3c3c",
      line: {
        color: "rgba(255,255,255,0.82)",
        width: 0.9
      },
      opacity: 0.82
    },
    hovertemplate:
      "<b>%{customdata[0]}</b><br>" +
      `${xMetric.label}: %{x}<br>` +
      `${yMetric.label}: %{y}<br>` +
      "Context: %{customdata[1]}<extra></extra>"
  };

  const lineTrace = {
    type: "scatter",
    mode: "lines",
    x: regression.lineX,
    y: regression.lineY,
    name: "Fit",
    line: {
      color: "rgba(16, 21, 24, 0.65)",
      width: 2
    },
    hoverinfo: "skip",
    showlegend: false
  };

  const layout = {
    paper_bgcolor: "rgba(0,0,0,0)",
    plot_bgcolor: "#ffffff",
    margin: {
      l: 76,
      r: 22,
      t: 26,
      b: 64
    },
    height: responsiveHeight(470, 410),
    font: {
      family: CHART_FONT,
      color: "#101518"
    },
    xaxis: {
      title: { text: xMetric.axisLabel || xMetric.label, font: { family: CHART_FONT, size: 12, color: "#101518" } },
      showgrid: true,
      gridcolor: "rgba(16, 21, 24, 0.08)",
      zeroline: true,
      zerolinecolor: "rgba(16, 21, 24, 0.16)",
      tickfont: { family: CHART_FONT, size: 11, color: "#4d4d4d" },
      automargin: true
    },
    yaxis: {
      title: { text: yMetric.axisLabel || yMetric.label, font: { family: CHART_FONT, size: 12, color: "#101518" } },
      showgrid: true,
      gridcolor: "rgba(16, 21, 24, 0.08)",
      zeroline: true,
      zerolinecolor: "rgba(16, 21, 24, 0.16)",
      tickfont: { family: CHART_FONT, size: 11, color: "#4d4d4d" },
      automargin: true
    },
    annotations: []
  };

  Plotly.react("relation-chart", [trace, lineTrace], layout, PLOT_CONFIG);
}

function renderGdpPerCapitaTrendChart() {
  const actualTrace = {
    type: "scatter",
    mode: "lines",
    x: YEARS,
    y: ENRICHED_DATA.map((row) => (row.gdpPerCapita !== null ? Math.log(row.gdpPerCapita) : null)),
    name: "U.S. real GDP per capita",
    line: {
      color: SERIES_BY_KEY.get("gdpPerCapita").color,
      width: 3
    },
    customdata: ENRICHED_DATA.map((row) => [
      formatDollars0(row.gdpPerCapita),
      row.gdpPerCapitaChange === null ? "No data" : formatSignedPercent(row.gdpPerCapitaChange)
    ]),
    hovertemplate:
      "<b>%{fullData.name}</b><br>%{x}<br>Level: %{customdata[0]}<br>Annual change: %{customdata[1]}<extra></extra>",
    connectgaps: false
  };

  const trendTrace = {
    type: "scatter",
    mode: "lines",
    x: YEARS,
    y: YEARS.map((year) => GDP_PER_CAPITA_TREND_BASE_LOG + 0.02 * (year - GDP_PER_CAPITA_BASE_YEAR)),
    name: "2% benchmark line",
    line: {
      color: "rgba(16, 21, 24, 0.6)",
      width: 2.2,
      dash: "dash"
    },
    hovertemplate: "<b>2% benchmark line</b><br>%{x}<extra></extra>"
  };

  const layout = buildSingleChartLayout({
    height: responsiveHeight(430, 390),
    yTitle: "Log real GDP per capita",
    showLegend: true,
    shapes: buildWarShapes("x")
  });

  layout.legend = {
    orientation: "h",
    y: 1.14,
    x: 0,
    font: { size: 11 }
  };
  Plotly.react("gdp-per-capita-trend-chart", [actualTrace, trendTrace], layout, PLOT_CONFIG);
  attachRangeSync("gdp-per-capita-trend-chart");
}

function renderGdpPerCapitaGrowthChart() {
  const growthTrace = {
    type: "scatter",
    mode: "lines",
    x: YEARS,
    y: ENRICHED_DATA.map((row) => (row.gdpPerCapitaLogGrowth !== null ? row.gdpPerCapitaLogGrowth * 100 : null)),
    name: "Annual log growth",
    line: {
      color: SERIES_BY_KEY.get("gdpPerCapita").color,
      width: 3
    },
    customdata: ENRICHED_DATA.map((row) => [
      formatSignedPercent(row.gdpPerCapitaLogGrowth),
      formatDollars0(row.gdpPerCapita)
    ]),
    hovertemplate:
      "<b>%{fullData.name}</b><br>%{x}<br>Annual log growth: %{customdata[0]}<br>Level: %{customdata[1]}<extra></extra>",
    connectgaps: false
  };

  const benchmarkTrace = {
    type: "scatter",
    mode: "lines",
    x: YEARS,
    y: YEARS.map(() => 2),
    name: "2% reference",
    line: {
      color: "rgba(16, 21, 24, 0.6)",
      width: 2.2,
      dash: "dash"
    },
    hovertemplate: "<b>2% reference</b><extra></extra>"
  };

  const layout = buildSingleChartLayout({
    height: responsiveHeight(380, 340),
    yTitle: "Annual log growth, %",
    showLegend: true,
    shapes: [
      ...buildWarShapes("x"),
      {
        type: "line",
        xref: "x",
        yref: "y",
        x0: state.xRange[0],
        x1: state.xRange[1],
        y0: 2,
        y1: 2,
        line: {
          color: "rgba(16, 21, 24, 0.16)",
          width: 1.2,
          dash: "dot"
        }
      },
      {
        type: "line",
        xref: "x",
        yref: "y",
        x0: state.xRange[0],
        x1: state.xRange[1],
        y0: 0,
        y1: 0,
        line: {
          color: "rgba(16, 21, 24, 0.16)",
          width: 1.1
        }
      }
    ]
  });

  layout.legend = {
    orientation: "h",
    y: 1.14,
    x: 0,
    font: { size: 11 }
  };

  Plotly.react("gdp-per-capita-growth-chart", [growthTrace, benchmarkTrace], layout, PLOT_CONFIG);
  attachRangeSync("gdp-per-capita-growth-chart");
}

function renderDatasetTable() {
  const tbody = document.getElementById("dataset-table-body");
  const rows = getTableRows();
  tbody.innerHTML = "";

  rows.forEach((row) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="metric-year">${row.year}</td>
      <td class="metric-gdp">${formatBillions(row.gdp)}</td>
      <td class="metric-gdp">${formatSignedPercent(row.gdpChange)}</td>
      <td class="metric-consumption">${formatBillions(row.consumption)}</td>
      <td class="metric-consumption">${formatSignedPercent(row.consumptionChange)}</td>
      <td class="metric-gdppc">${formatDollars0(row.gdpPerCapita)}</td>
      <td class="metric-gdppc">${formatSignedPercent(row.gdpPerCapitaChange)}</td>
      <td class="metric-unemployment">${formatPercent(row.unemployment)}</td>
      <td class="metric-unemployment">${formatSignedPointChange(row.unemploymentChange)}</td>
      <td class="metric-gini">${formatGini(row.gini)}</td>
      <td class="metric-gini">${formatSignedGiniChange(row.giniChange)}</td>
      <td class="metric-employment">${formatThousands(row.employment)}</td>
      <td class="metric-employment">${formatSignedPercent(row.employmentChange)}</td>
      <td class="metric-government">${formatBillions(row.government)}</td>
      <td class="metric-government">${formatSignedPercent(row.governmentChange)}</td>
      <td class="metric-core">${formatIndexNumber(row.coreWelfare)}</td>
      <td class="metric-full">${formatIndexNumber(row.distributionWelfare)}</td>
    `;
    tbody.appendChild(tr);
  });

  document.getElementById("dataset-meta").textContent =
    `${rows.length} rows shown from the full 1929–2025 sample${state.tableQuery ? ` and filtered by “${state.tableQuery}”.` : "."}`;
}

function getTableRows() {
  return ENRICHED_DATA
    .filter((row) => {
      if (!state.tableQuery) {
        return true;
      }
      const haystack = [
        row.year,
        row.gdp,
        row.consumption,
        row.gdpPerCapita,
        row.unemployment,
        row.gini,
        row.employment,
        row.government,
        row.coreWelfare,
        row.distributionWelfare
      ]
        .map((value) => (value === null ? "" : String(value).toLowerCase()))
        .join(" ");
      return haystack.includes(state.tableQuery);
    });
}

function downloadWorkbook() {
  const link = document.createElement("a");
  link.href = encodeURI(DATAPACK_DOWNLOAD_FILE);
  link.download = DATAPACK_DOWNLOAD_FILE;
  link.click();
}

function renderBenchmarkTable() {
  const tbody = document.getElementById("benchmark-table-body");
  if (!tbody) {
    return;
  }

  tbody.innerHTML = WAR_MULTIPLIER_DATA.map((item) => `
    <tr>
      <td>${item.label}</td>
      <td>${item.windowLabel}</td>
      <td>${formatNumber(item.deltaG, 1)}</td>
      <td>${formatNumber(item.deltaY, 1)}</td>
      <td>${item.coreChange === null ? "No data" : item.coreChange.toFixed(6)}</td>
      <td>${item.distributionChange === null ? "No data" : item.distributionChange.toFixed(6)}</td>
      <td>${formatMultiplier(item.outputMultiplier)}</td>
      <td>${formatMultiplier(item.coreWelfareResponse)}</td>
      <td>${formatMultiplier(item.distributionWelfareResponse)}</td>
      <td>${formatMultiplier(item.coreWelfareScaled)}</td>
      <td>${formatMultiplier(item.distributionWelfareScaled)}</td>
    </tr>
  `).join("");
}

function renderLongRunChart() {
  const baseCore = ENRICHED_DATA[0]?.coreWelfare ?? null;
  if (baseCore === null) {
    renderEmptyChart("long-run-chart", "Long-run series unavailable.");
    return;
  }

  const descriptors = [
    {
      key: "gdpPerCapita",
      title: "GDP pc ($)",
      name: "GDP per capita",
      color: SERIES_BY_KEY.get("gdpPerCapita").color,
      width: 3.1,
      values: ENRICHED_DATA.map((row) => row.gdpPerCapita),
      customdata: ENRICHED_DATA.map((row) => formatDollars0(row.gdpPerCapita)),
      hovertemplate: "<b>GDP per capita</b><br>%{x}<br>%{customdata}<extra></extra>"
    },
    {
      key: "coreWelfare",
      title: "Core welfare (log)",
      name: "Core welfare",
      color: DERIVED_COLORS.coreWelfare,
      width: 3.1,
      values: ENRICHED_DATA.map((row) => row.coreWelfare - baseCore),
      customdata: ENRICHED_DATA.map((row) => row.coreWelfare),
      hovertemplate:
        "<b>Core welfare</b><br>%{x}<br>Change from 1929: %{y:.3f}<br>Raw level: %{customdata:.4f}<extra></extra>"
    },
    {
      key: "unemployment",
      title: "Unemp. (%)",
      name: "Unemployment",
      color: SERIES_BY_KEY.get("unemployment").color,
      width: 3,
      values: ENRICHED_DATA.map((row) => row.unemployment * 100),
      customdata: ENRICHED_DATA.map((row) => formatPercent(row.unemployment)),
      hovertemplate: "<b>Unemployment</b><br>%{x}<br>%{customdata}<extra></extra>"
    },
    {
      key: "government",
      title: "Gov. spend. (bn)",
      name: "Government spending",
      color: SERIES_BY_KEY.get("government").color,
      width: 3.1,
      values: ENRICHED_DATA.map((row) => row.government),
      customdata: ENRICHED_DATA.map((row) => formatBillions(row.government)),
      hovertemplate: "<b>Government spending</b><br>%{x}<br>%{customdata}<extra></extra>"
    }
  ].filter((item) => state.chartVisibility.longRun.has(item.key));

  if (!descriptors.length) {
    renderEmptyChart("long-run-chart", "Keep at least one long-run series visible.");
    return;
  }

  const panels = descriptors.map((item) => ({ key: item.key, title: item.title }));
  const traces = descriptors.map((item, index) => ({
    type: "scatter",
    mode: "lines",
    x: YEARS,
    y: item.values,
    xaxis: traceAxisRef("x", index + 1),
    yaxis: traceAxisRef("y", index + 1),
    name: item.name,
    line: { color: item.color, width: item.width },
    customdata: item.customdata,
    hovertemplate: item.hovertemplate,
    connectgaps: false
  }));

  const layout = buildMultiRowLayout(panels, {
    height: responsiveHeight(1100, 940),
    showZeroLine: false
  });

  Plotly.react("long-run-chart", traces, layout, PLOT_CONFIG);
  attachRangeSync("long-run-chart");
}

function exportFullCsv() {
  const headers = [
    "year",
    "gdp",
    "gdpChange",
    "consumption",
    "consumptionChange",
    "gdpPerCapita",
    "gdpPerCapitaChange",
    "unemployment",
    "unemploymentChange",
    "gini",
    "giniChange",
    "employment",
    "employmentChange",
    "government",
    "governmentChange",
    "coreWelfare",
    "distributionWelfare"
  ];

  const lines = [
    headers.join(","),
    ...ENRICHED_DATA.map((row) =>
      headers
        .map((key) => formatCsvCell(row[key]))
        .join(",")
    )
  ];

  const blob = new Blob([`\uFEFF${lines.join("\n")}`], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "Welfare Simulation Macro Datapack USA 1929-2025.csv";
  link.click();
  URL.revokeObjectURL(url);
}

function formatCsvCell(value) {
  if (value === null || value === undefined) {
    return "";
  }
  const text = String(value);
  return /[",\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
}

function initSimulationForms() {
  buildSimulationForm("sim-form-left", "prev");
  buildSimulationForm("sim-form-right", "next");
}

function buildSimulationForm(targetId, prefix) {
  const container = document.getElementById(targetId);
  container.innerHTML = "";

  SIM_FIELDS.forEach((field) => {
    const wrapper = document.createElement("div");
    wrapper.className = "field";
    wrapper.innerHTML = `
      <label for="sim-${prefix}-${field.key}">
        <strong>${field.label}</strong>
        <span>${field.note}</span>
      </label>
      <input id="sim-${prefix}-${field.key}" type="number" step="${field.step}" inputmode="decimal">
    `;
    container.appendChild(wrapper);
  });
}

function initSimulationControls() {
  document.getElementById("simulate-button").addEventListener("click", runSimulation);
  document.getElementById("clear-simulation").addEventListener("click", clearSimulation);
  document.getElementById("load-example").addEventListener("click", loadSimulationExample);
}

function clearSimulation() {
  ["prev", "next"].forEach((prefix) => {
    SIM_FIELDS.forEach((field) => {
      const input = document.getElementById(`sim-${prefix}-${field.key}`);
      if (input) {
        input.value = "";
      }
    });
  });
  state.lastSimulationResult = null;
  document.getElementById("simulation-status").textContent =
    "Fields cleared. Enter any two-period historical or hypothetical scenario and run the calculation again.";
  updateSimulationCards(null);
  renderSimulationPlaceholders();
}

function loadSimulationExample() {
  const year1941 = YEAR_TO_ROW.get(1941);
  const year1942 = YEAR_TO_ROW.get(1942);
  const baseline = {
    year: year1941.year,
    population: year1941.populationMillions,
    gdp: year1941.gdp,
    gdpPerCapita: year1941.gdpPerCapita,
    consumption: year1941.consumption,
    unemployment: year1941.unemployment * 100,
    gini: year1941.gini,
    employment: year1941.employment,
    government: year1941.government
  };
  const next = {
    year: year1942.year,
    population: year1942.populationMillions,
    gdp: year1942.gdp,
    gdpPerCapita: year1942.gdpPerCapita,
    consumption: year1942.consumption,
    unemployment: year1942.unemployment * 100,
    gini: year1942.gini,
    employment: year1942.employment,
    government: year1942.government
  };

  fillSimulationFields("prev", baseline);
  fillSimulationFields("next", next);
  runSimulation();
}

function fillSimulationFields(prefix, values) {
  Object.entries(values).forEach(([key, value]) => {
    const input = document.getElementById(`sim-${prefix}-${key}`);
    if (input) {
      input.value = value ?? "";
    }
  });
}

function runSimulation() {
  const prev = readSimulationScenario("prev");
  const next = readSimulationScenario("next");
  const status = document.getElementById("simulation-status");

  if (!prev.ok || !next.ok) {
    status.textContent = [prev.message, next.message].filter(Boolean).join(" ");
    updateSimulationCards(null);
    renderSimulationPlaceholders();
    return;
  }

  const result = calculateSimulation(prev.scenario, next.scenario);
  state.lastSimulationResult = result;
  status.textContent = result.notes.join(" ");
  updateSimulationCards(result);
  renderSimulationCharts(result);
}

function readSimulationScenario(prefix) {
  const raw = {};
  SIM_FIELDS.forEach((field) => {
    const value = document.getElementById(`sim-${prefix}-${field.key}`).value.trim();
    raw[field.key] = value === "" ? null : Number(value);
  });

  if (!Number.isFinite(raw.gdp) && !(Number.isFinite(raw.population) && Number.isFinite(raw.gdpPerCapita))) {
    return {
      ok: false,
      message: `For ${prefix === "prev" ? "the baseline year" : "the comparison year"}, enter GDP or enter both population and GDP per capita.`
    };
  }
  if (!Number.isFinite(raw.consumption) || !Number.isFinite(raw.unemployment) || !Number.isFinite(raw.employment) || !Number.isFinite(raw.government)) {
    return {
      ok: false,
      message: `For ${prefix === "prev" ? "the baseline year" : "the comparison year"}, consumption, unemployment, employment, and government spending are required.`
    };
  }
  if (raw.unemployment < 0 || raw.unemployment >= 100) {
    return {
      ok: false,
      message: `For ${prefix === "prev" ? "the baseline year" : "the comparison year"}, unemployment must be between 0 and 100.`
    };
  }
  if (Number.isFinite(raw.gini) && (raw.gini < 0 || raw.gini >= 100)) {
    return {
      ok: false,
      message: `For ${prefix === "prev" ? "the baseline year" : "the comparison year"}, Gini must be between 0 and 100.`
    };
  }

  let gdp = raw.gdp;
  if (!Number.isFinite(gdp) && Number.isFinite(raw.population) && Number.isFinite(raw.gdpPerCapita)) {
    gdp = (raw.population * raw.gdpPerCapita) / 1000;
  }

  const scenario = {
    year: raw.year,
    population: raw.population,
    gdp,
    gdpPerCapita: raw.gdpPerCapita,
    consumption: raw.consumption,
    unemployment: raw.unemployment / 100,
    gini: Number.isFinite(raw.gini) ? raw.gini : null,
    employment: raw.employment,
    government: raw.government
  };

  scenario.impliedPopulation =
    Number.isFinite(scenario.gdp) && Number.isFinite(scenario.gdpPerCapita)
      ? (scenario.gdp * 1000) / scenario.gdpPerCapita
      : null;
  scenario.populationGap =
    Number.isFinite(scenario.population) && Number.isFinite(scenario.impliedPopulation)
      ? scenario.population - scenario.impliedPopulation
      : null;
  scenario.laborForce = scenario.employment / (1 - scenario.unemployment);
  scenario.coreWelfare = Math.log(scenario.consumption / scenario.employment) + Math.log(1 - scenario.unemployment);
  scenario.distributionWelfare =
    scenario.gini !== null ? scenario.coreWelfare + Math.log(1 - scenario.gini / 100) : null;

  return {
    ok: true,
    scenario
  };
}

function calculateSimulation(prev, next) {
  const deltaG = next.government - prev.government;
  const deltaY = next.gdp - prev.gdp;
  const shock = deltaG / prev.gdp;
  const outputMultiplier = deltaG !== 0 ? deltaY / deltaG : null;
  const coreChange = next.coreWelfare - prev.coreWelfare;
  const coreMultiplier = deltaG !== 0 ? coreChange / deltaG : null;
  const fullChange =
    next.distributionWelfare !== null && prev.distributionWelfare !== null
      ? next.distributionWelfare - prev.distributionWelfare
      : null;
  const fullMultiplier = deltaG !== 0 && fullChange !== null ? fullChange / deltaG : null;
  const normalizedCoreMultiplier = shock !== 0 ? coreChange / shock : null;
  const normalizedFullMultiplier = shock !== 0 && fullChange !== null ? fullChange / shock : null;

  const decomposition = {
    consumption: Math.log(next.consumption / next.employment) - Math.log(prev.consumption / prev.employment),
    access: Math.log(1 - next.unemployment) - Math.log(1 - prev.unemployment),
    inequality:
      next.gini !== null && prev.gini !== null
        ? Math.log(1 - next.gini / 100) - Math.log(1 - prev.gini / 100)
        : null
  };

  const notes = [];
  notes.push("Same thesis formulas applied to a transparent two-period scenario.");
  if (Number.isFinite(prev.impliedPopulation)) {
    notes.push(`Baseline implied population: ${formatMillions(prev.impliedPopulation)}.`);
  }
  if (Number.isFinite(next.impliedPopulation)) {
    notes.push(`Comparison implied population: ${formatMillions(next.impliedPopulation)}.`);
  }
  if (Number.isFinite(prev.populationGap) && Math.abs(prev.populationGap) > 0.5) {
    notes.push(`Baseline population input and implied population differ by ${formatMillions(Math.abs(prev.populationGap))}.`);
  }
  if (Number.isFinite(next.populationGap) && Math.abs(next.populationGap) > 0.5) {
    notes.push(`Comparison population input and implied population differ by ${formatMillions(Math.abs(next.populationGap))}.`);
  }
  if (shock === 0) {
    notes.push("Government spending did not change, so multiplier values are undefined.");
  }
  if (fullChange === null) {
    notes.push("Full welfare needs Gini values in both years; the core welfare version still works.");
  }
  if (normalizedCoreMultiplier !== null) {
    notes.push(`Scaled core welfare comparison: ${formatMultiplier(normalizedCoreMultiplier)}.`);
  }
  if (normalizedFullMultiplier !== null) {
    notes.push(`Scaled full welfare comparison: ${formatMultiplier(normalizedFullMultiplier)}.`);
  }

  return {
    prev,
    next,
    shock,
    outputMultiplier,
    coreChange,
    fullChange,
    coreMultiplier,
    fullMultiplier,
    normalizedCoreMultiplier,
    normalizedFullMultiplier,
    decomposition,
    notes
  };
}

function updateSimulationCards(result) {
  const values = result
    ? {
        shock: formatSignedPercent(result.shock),
        shockNote: "Government spending change divided by baseline GDP.",
        outputMultiplier: formatMultiplier(result.outputMultiplier),
        outputNote: result.outputMultiplier === null ? "Undefined because government spending did not change." : "Change in GDP divided by change in government spending.",
        coreMultiplier: formatMultiplier(result.coreMultiplier),
        coreNote: result.normalizedCoreMultiplier === null ? "Direct welfare response, dW/dG." : `Direct welfare response, dW/dG. Scaled comparison: ${formatMultiplier(result.normalizedCoreMultiplier)}.`,
        fullMultiplier: formatMultiplier(result.fullMultiplier),
        fullNote: result.fullMultiplier === null ? "Needs Gini in both years." : result.normalizedFullMultiplier === null ? "Direct welfare response, dW/dG." : `Direct welfare response, dW/dG. Scaled comparison: ${formatMultiplier(result.normalizedFullMultiplier)}.`,
        coreBase: formatIndexNumber(result.prev.coreWelfare),
        coreBaseNote: `Labor force: ${formatThousands(result.prev.laborForce)}.`,
        coreNext: formatIndexNumber(result.next.coreWelfare),
        coreNextNote: `Labor force: ${formatThousands(result.next.laborForce)}.`,
        fullBase: formatIndexNumber(result.prev.distributionWelfare),
        fullBaseNote: result.prev.gini === null ? "No Gini entered." : `Gini used: ${result.prev.gini.toFixed(1)}.`,
        fullNext: formatIndexNumber(result.next.distributionWelfare),
        fullNextNote: result.next.gini === null ? "No Gini entered." : `Gini used: ${result.next.gini.toFixed(1)}.`
      }
    : {
        shock: "—",
        shockNote: "The change in government spending divided by baseline GDP.",
        outputMultiplier: "—",
        outputNote: "Output response relative to the spending change.",
        coreMultiplier: "—",
        coreNote: "Direct welfare response, dW/dG, using worker consumption and employment access only.",
        fullMultiplier: "—",
        fullNote: "Direct welfare response, dW/dG, with the inequality adjustment when both Gini values are present.",
        coreBase: "—",
        coreBaseNote: "Level in year t-1.",
        coreNext: "—",
        coreNextNote: "Level in year t.",
        fullBase: "—",
        fullBaseNote: "Needs Gini in year t-1.",
        fullNext: "—",
        fullNextNote: "Needs Gini in year t.",
      };

  document.getElementById("sim-shock").textContent = values.shock;
  document.getElementById("sim-shock-note").textContent = values.shockNote;
  document.getElementById("sim-output-multiplier").textContent = values.outputMultiplier;
  document.getElementById("sim-output-note").textContent = values.outputNote;
  document.getElementById("sim-core-multiplier").textContent = values.coreMultiplier;
  document.getElementById("sim-core-note").textContent = values.coreNote;
  document.getElementById("sim-full-multiplier").textContent = values.fullMultiplier;
  document.getElementById("sim-full-note").textContent = values.fullNote;
  document.getElementById("sim-core-base").textContent = values.coreBase;
  document.getElementById("sim-core-base-note").textContent = values.coreBaseNote;
  document.getElementById("sim-core-next").textContent = values.coreNext;
  document.getElementById("sim-core-next-note").textContent = values.coreNextNote;
  document.getElementById("sim-full-base").textContent = values.fullBase;
  document.getElementById("sim-full-base-note").textContent = values.fullBaseNote;
  document.getElementById("sim-full-next").textContent = values.fullNext;
  document.getElementById("sim-full-next-note").textContent = values.fullNextNote;
}

function renderSimulationPlaceholders() {
  renderEmptyChart("simulation-comparison-chart", "Run a two-year scenario to compare output and welfare multipliers.");
  renderEmptyChart("simulation-decomposition-chart", "Run a two-year scenario to see the welfare decomposition.");
}

function renderSimulationCharts(result) {
  if (!result) {
    renderSimulationPlaceholders();
    return;
  }

  const comparisonTrace = {
    type: "bar",
    x: ["Scenario"],
    y: [result.outputMultiplier],
    name: "dY/dG",
    marker: {
      color: SERIES_BY_KEY.get("gdp").color,
      line: { color: "rgba(16, 21, 24, 0.14)", width: 0.6 }
    },
    hovertemplate: "Output response dY/dG: %{y:.3f}<extra></extra>"
  };

  const comparisonCoreTrace = {
    type: "scatter",
    mode: "markers",
    x: ["Scenario"],
    y: [result.coreMultiplier],
    yaxis: "y2",
    name: "Core dW/dG",
    marker: {
      color: DERIVED_COLORS.coreWelfare,
      size: 12,
      line: { color: "#ffffff", width: 1.4 }
    },
    hovertemplate: "Core welfare response dW/dG: %{y:.6f}<extra></extra>"
  };

  const comparisonFullTrace = {
    type: "scatter",
    mode: "markers",
    x: ["Scenario"],
    y: [result.fullMultiplier],
    yaxis: "y2",
    name: "Full dW/dG",
    marker: {
      color: DERIVED_COLORS.distributionWelfare,
      size: 12,
      line: { color: "#ffffff", width: 1.4 }
    },
    hovertemplate: "Full welfare response dW/dG: %{y:.6f}<extra></extra>"
  };
  const comparisonTraces = [
    { key: "output", trace: comparisonTrace },
    { key: "core", trace: comparisonCoreTrace },
    { key: "full", trace: comparisonFullTrace }
  ]
    .filter((item) => state.chartVisibility.simulationComparison.has(item.key))
    .map((item) => item.trace);

  const comparisonLayout = {
    barcornerradius: 8,
    paper_bgcolor: "rgba(0,0,0,0)",
    plot_bgcolor: "#ffffff",
    margin: { l: 64, r: 82, t: 18, b: 48 },
    height: responsiveHeight(360, 340),
    font: {
      family: CHART_FONT,
      color: "#101518"
    },
    transition: {
      duration: 260,
      easing: "cubic-in-out"
    },
    xaxis: {
      showgrid: false,
      zeroline: false,
      tickfont: { family: CHART_FONT, size: 11, color: "#4d4d4d" }
    },
    yaxis: {
      title: { text: "Output response dY/dG", font: { family: CHART_FONT, size: 12, color: "#101518" } },
      showgrid: true,
      gridcolor: "rgba(16, 21, 24, 0.08)",
      zeroline: true,
      zerolinecolor: "rgba(16, 21, 24, 0.16)",
      rangemode: "tozero",
      tickformat: ".2f",
      tickfont: { family: CHART_FONT, size: 11, color: "#4d4d4d" }
    },
    yaxis2: {
      title: { text: "Welfare response dW/dG", font: { family: CHART_FONT, size: 12, color: "#101518" } },
      overlaying: "y",
      side: "right",
      showgrid: false,
      zeroline: false,
      rangemode: "tozero",
      tickformat: ".6f",
      tickfont: { family: CHART_FONT, size: 11, color: "#4d4d4d" }
    },
    legend: {
      orientation: "h",
      y: 1.18,
      x: 0,
      bgcolor: "rgba(255,255,255,0.94)",
      bordercolor: "rgba(16, 21, 24, 0.06)",
      borderwidth: 1,
      font: { family: CHART_FONT, size: 11, color: "#101518" }
    }
  };

  if (!comparisonTraces.length) {
    renderEmptyChart("simulation-comparison-chart", "Keep at least one simulation comparison series visible.");
  } else {
    Plotly.react("simulation-comparison-chart", comparisonTraces, comparisonLayout, PLOT_CONFIG);
  }

  const decompositionTrace = {
    type: "bar",
    x: ["Worker consumption", "Employment access", "Inequality"],
    y: [result.decomposition.consumption, result.decomposition.access, result.decomposition.inequality],
    marker: {
      color: [
        SERIES_BY_KEY.get("consumption").color,
        SERIES_BY_KEY.get("employment").color,
        SERIES_BY_KEY.get("gini").color
      ]
    },
    hovertemplate: "%{x}: %{y:.4f}<extra></extra>"
  };
  const decompositionDescriptors = [
    { key: "consumption", label: "Worker consumption", value: result.decomposition.consumption, color: SERIES_BY_KEY.get("consumption").color },
    { key: "access", label: "Employment access", value: result.decomposition.access, color: SERIES_BY_KEY.get("employment").color },
    { key: "inequality", label: "Inequality", value: result.decomposition.inequality, color: SERIES_BY_KEY.get("gini").color }
  ].filter((item) => state.chartVisibility.simulationDecomposition.has(item.key));
  decompositionTrace.x = decompositionDescriptors.map((item) => item.label);
  decompositionTrace.y = decompositionDescriptors.map((item) => item.value);
  decompositionTrace.marker.color = decompositionDescriptors.map((item) => item.color);

  const decompositionLayout = {
    paper_bgcolor: "rgba(0,0,0,0)",
    plot_bgcolor: "#ffffff",
    margin: { l: 64, r: 18, t: 18, b: 48 },
    height: responsiveHeight(360, 340),
    font: {
      family: CHART_FONT,
      color: "#101518"
    },
    xaxis: {
      showgrid: false,
      zeroline: false,
      tickfont: { family: CHART_FONT, size: 11, color: "#4d4d4d" }
    },
    yaxis: {
      title: { text: "Contribution to welfare change", font: { family: CHART_FONT, size: 12, color: "#101518" } },
      showgrid: true,
      gridcolor: "rgba(16, 21, 24, 0.08)",
      zeroline: true,
      zerolinecolor: "rgba(16, 21, 24, 0.16)",
      tickfont: { family: CHART_FONT, size: 11, color: "#4d4d4d" }
    }
  };

  if (!decompositionDescriptors.length) {
    renderEmptyChart("simulation-decomposition-chart", "Keep at least one welfare contribution visible.");
  } else {
    Plotly.react("simulation-decomposition-chart", [decompositionTrace], decompositionLayout, PLOT_CONFIG);
  }
}

function calculateWarWindowStats(windowSpec) {
  const start = YEAR_TO_ROW.get(windowSpec.startPrev);
  const end = YEAR_TO_ROW.get(windowSpec.end);
  const deltaG = end.government - start.government;
  const deltaY = end.gdp - start.gdp;
  const outputMultiplier = deltaY / deltaG;
  const coreChange = end.coreWelfare - start.coreWelfare;
  const coreWelfareResponse = coreChange / deltaG;
  const distributionWelfareResponse =
    end.distributionWelfare !== null && start.distributionWelfare !== null
      ? (end.distributionWelfare - start.distributionWelfare) / deltaG
      : null;
  const coreWelfareScaled = coreChange / (deltaG / start.gdp);
  const distributionWelfareScaled =
    end.distributionWelfare !== null && start.distributionWelfare !== null
      ? (end.distributionWelfare - start.distributionWelfare) / (deltaG / start.gdp)
      : null;
  const consumptionContribution = Math.log(end.consumption / end.employment) - Math.log(start.consumption / start.employment);
  const accessContribution = Math.log(1 - end.unemployment) - Math.log(1 - start.unemployment);
  const inequalityContribution =
    end.gini !== null && start.gini !== null
      ? Math.log(1 - end.gini / 100) - Math.log(1 - start.gini / 100)
      : null;
  return {
    label: windowSpec.label,
    windowLabel: `${windowSpec.startPrev}-${windowSpec.end}`,
    startYear: windowSpec.startPrev,
    endYear: windowSpec.end,
    deltaG,
    deltaY,
    coreChange,
    distributionChange:
      end.distributionWelfare !== null && start.distributionWelfare !== null
        ? end.distributionWelfare - start.distributionWelfare
        : null,
    outputMultiplier,
    coreWelfareResponse,
    distributionWelfareResponse,
    coreWelfareScaled,
    distributionWelfareScaled,
    consumptionContribution,
    accessContribution,
    inequalityContribution
  };
}

function buildWindowIndexedSeries(key, mode) {
  const visibleRows = ENRICHED_DATA.filter((row) => isYearVisible(row.year));
  const baseRow = visibleRows.find((row) => row[key] !== null);
  const baseValue = baseRow ? rowValueForIndex(baseRow[key], mode) : null;

  return {
    values: ENRICHED_DATA.map((row) => {
      if (row[key] === null || baseValue === null) {
        return null;
      }
      const currentValue = rowValueForIndex(row[key], mode);
      return (currentValue / baseValue) * 100;
    }),
    customdata: ENRICHED_DATA.map((row) => {
      if (row[key] === null || baseValue === null) {
        return ["No data", "No data"];
      }
      const indexedValue = ((rowValueForIndex(row[key], mode) / baseValue) * 100).toFixed(1);
      return [`${indexedValue} (first visible year = 100)`, formatMetricValue(key, row[key])];
    })
  };
}

function rowValueForIndex(value) {
  return value;
}

function attachRangeSync(targetId) {
  const element = document.getElementById(targetId);
  if (!element || typeof element.on !== "function") {
    return;
  }
  if (typeof element.removeAllListeners === "function") {
    element.removeAllListeners("plotly_relayout");
  }
  element.on("plotly_relayout", (eventData) => {
    if (state.syncingRange) {
      return;
    }
    const nextRange = extractRangeFromRelayout(eventData);
    if (!nextRange) {
      return;
    }
    state.syncingRange = true;
    state.xRange = nextRange;
    syncRangeInputs();
    updateSelectionSummary();
    renderOverviewChart();
    renderUnitChart();
    renderChangeChart();
    renderWelfareChart();
    renderRelationChart();
    renderDatasetTable();
    renderGdpPerCapitaTrendChart();
    renderGdpPerCapitaGrowthChart();
    state.syncingRange = false;
  });
}

function extractRangeFromRelayout(eventData) {
  if (!eventData || eventData["xaxis.autorange"] || eventData["xaxis2.autorange"]) {
    return [MIN_YEAR - 0.5, MAX_YEAR + 0.5];
  }

  const keys = Object.keys(eventData);
  const range0Key = keys.find((key) => /^xaxis\d*\.range\[0\]$/.test(key));
  const range1Key = keys.find((key) => /^xaxis\d*\.range\[1\]$/.test(key));
  if (range0Key && range1Key) {
    return normalizeRange([Number(eventData[range0Key]), Number(eventData[range1Key])]);
  }
  return null;
}

function buildSingleChartLayout(options) {
  return {
    height: options.height,
    paper_bgcolor: "rgba(0,0,0,0)",
    plot_bgcolor: "#ffffff",
    margin: {
      l: 86,
      r: 22,
      t: 24,
      b: 60
    },
    font: {
      family: CHART_FONT,
      color: "#101518"
    },
    transition: {
      duration: 240,
      easing: "cubic-in-out"
    },
    hovermode: "x unified",
    dragmode: "zoom",
    showlegend: Boolean(options.showLegend),
    hoverlabel: {
      bgcolor: "#ffffff",
      bordercolor: "rgba(16, 21, 24, 0.12)",
      align: "left",
      font: {
        family: CHART_FONT,
        size: 12,
        color: "#101518"
      }
    },
    xaxis: {
      range: state.xRange,
      tickmode: "linear",
      dtick: getTickSpacing(),
      showgrid: false,
      zeroline: false,
      showline: true,
      linecolor: "rgba(16, 21, 24, 0.16)",
      tickfont: { family: CHART_FONT, size: 11, color: "#4d4d4d" },
      title: { text: "Year", font: { family: CHART_FONT, size: 12, color: "#101518" } },
      spikesnap: "cursor",
      showspikes: true,
      spikemode: "across",
      spikecolor: "rgba(16, 21, 24, 0.18)",
      spikethickness: 1
    },
    yaxis: {
      title: { text: options.yTitle, font: { family: CHART_FONT, size: 12, color: "#101518" } },
      showgrid: true,
      gridcolor: "rgba(16, 21, 24, 0.08)",
      zeroline: true,
      zerolinecolor: "rgba(16, 21, 24, 0.18)",
      tickfont: { family: CHART_FONT, size: 11, color: "#4d4d4d" },
      automargin: true
    },
    legend: options.showLegend ? {
      bgcolor: "rgba(255,255,255,0.94)",
      bordercolor: "rgba(16, 21, 24, 0.06)",
      borderwidth: 1,
      font: {
        family: CHART_FONT,
        size: 11,
        color: "#101518"
      }
    } : undefined,
    shapes: options.shapes || buildWarShapes("x")
  };
}

function buildMultiRowLayout(panels, options) {
  const layout = {
    grid: {
      rows: panels.length,
      columns: 1,
      pattern: "independent",
      ygap: 0.19
    },
    height: options.height,
    paper_bgcolor: "rgba(0,0,0,0)",
    plot_bgcolor: "#ffffff",
    margin: {
      l: 132,
      r: 20,
      t: 18,
      b: 56
    },
    font: {
      family: CHART_FONT,
      color: "#101518"
    },
    transition: {
      duration: 240,
      easing: "cubic-in-out"
    },
    hovermode: "x unified",
    showlegend: false,
    dragmode: "zoom",
    hoverlabel: {
      bgcolor: "#ffffff",
      bordercolor: "rgba(16, 21, 24, 0.12)",
      align: "left",
      font: {
        family: CHART_FONT,
        size: 12,
        color: "#101518"
      }
    },
    shapes: buildWarShapes("x")
  };

  panels.forEach((panel, index) => {
    const row = index + 1;
    const xAxisKey = axisKey("x", row);
    const yAxisKey = axisKey("y", row);
    layout[xAxisKey] = {
      range: state.xRange,
      tickmode: "linear",
      dtick: getTickSpacing(),
      matches: row === 1 ? undefined : "x",
      showgrid: false,
      zeroline: false,
      showline: true,
      linecolor: "rgba(16, 21, 24, 0.16)",
      tickfont: { family: CHART_FONT, size: 10, color: "#4d4d4d" },
      title: row === panels.length ? { text: "Year", font: { family: CHART_FONT, size: 12, color: "#101518" } } : undefined,
      showticklabels: row === panels.length,
      spikesnap: "cursor",
      showspikes: true,
      spikemode: "across",
      spikecolor: "rgba(16, 21, 24, 0.18)",
      spikethickness: 1
    };
    layout[yAxisKey] = {
      title: {
        text: panel.title,
        font: { family: CHART_FONT, size: 10, color: "#3a3a3a" },
        standoff: 6
      },
      showgrid: true,
      gridcolor: "rgba(16, 21, 24, 0.08)",
      zeroline: options.showZeroLine,
      zerolinecolor: "rgba(16, 21, 24, 0.18)",
      tickfont: { family: CHART_FONT, size: 10, color: "#4d4d4d" },
      automargin: true
    };
  });

  return layout;
}

function buildWarShapes(xRef) {
  if (!state.showWars) {
    return [];
  }
  return WARS.map((war) => ({
    type: "rect",
    xref: xRef,
    yref: "paper",
    x0: war.start - 0.5,
    x1: war.end + 0.5,
    y0: 0,
    y1: 1,
    fillcolor: war.color,
    line: { width: 0 },
    layer: "below"
  }));
}

function renderEmptyChart(targetId, message) {
  Plotly.react(targetId, [], {
    paper_bgcolor: "rgba(0,0,0,0)",
    plot_bgcolor: "#ffffff",
    margin: { l: 24, r: 24, t: 24, b: 24 },
    xaxis: { visible: false },
    yaxis: { visible: false },
    annotations: [
      {
        x: 0.5,
        y: 0.5,
        xref: "paper",
        yref: "paper",
        text: message,
        showarrow: false,
        font: {
          family: CHART_FONT,
          size: 15,
          color: "#5b5b5b"
        },
        align: "center"
      }
    ]
  }, PLOT_CONFIG);
}

function getTickSpacing() {
  const width = state.xRange[1] - state.xRange[0];
  if (width <= 8) {
    return 1;
  }
  if (width <= 20) {
    return 2;
  }
  if (width <= 50) {
    return 5;
  }
  return 10;
}

function normalizeRange(range) {
  const start = clampYear(range[0] + 0.5) - 0.5;
  const end = clampYear(range[1] - 0.5) + 0.5;
  return [Math.min(start, end), Math.max(start, end)];
}

function clampYear(year) {
  return Math.max(MIN_YEAR, Math.min(MAX_YEAR, Math.round(year)));
}

function isYearVisible(year) {
  return year >= state.xRange[0] + 0.5 && year <= state.xRange[1] - 0.5;
}

function calculateCorrelation(valuesA, valuesB) {
  if (valuesA.length < 2 || valuesB.length < 2 || valuesA.length !== valuesB.length) {
    return null;
  }
  const meanA = average(valuesA);
  const meanB = average(valuesB);
  let numerator = 0;
  let varianceA = 0;
  let varianceB = 0;

  for (let index = 0; index < valuesA.length; index += 1) {
    const deltaA = valuesA[index] - meanA;
    const deltaB = valuesB[index] - meanB;
    numerator += deltaA * deltaB;
    varianceA += deltaA * deltaA;
    varianceB += deltaB * deltaB;
  }

  const denominator = Math.sqrt(varianceA * varianceB);
  return denominator ? numerator / denominator : null;
}

function linearRegression(xValues, yValues) {
  const meanX = average(xValues);
  const meanY = average(yValues);
  let numerator = 0;
  let denominator = 0;
  for (let index = 0; index < xValues.length; index += 1) {
    numerator += (xValues[index] - meanX) * (yValues[index] - meanY);
    denominator += (xValues[index] - meanX) ** 2;
  }
  const slope = denominator ? numerator / denominator : 0;
  const intercept = meanY - slope * meanX;
  const minX = Math.min(...xValues);
  const maxX = Math.max(...xValues);
  return {
    slope,
    intercept,
    lineX: [minX, maxX],
    lineY: [slope * minX + intercept, slope * maxX + intercept],
    correlation: calculateCorrelation(xValues, yValues) ?? 0
  };
}

function average(values) {
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function getWarLabel(year) {
  const match = WARS.find((war) => year >= war.start && year <= war.end);
  return match ? match.label : null;
}

function transformLevelValue(series, rawValue) {
  if (rawValue === null) {
    return null;
  }
  if (series.key === "unemployment") {
    return rawValue * 100;
  }
  return rawValue;
}

function transformChangeValue(series, rawValue) {
  if (rawValue === null) {
    return null;
  }
  if (series.changePanel === "growth" || series.changePanel === "unemployment") {
    return rawValue * 100;
  }
  return rawValue;
}

function transformRelationValue(metricKey, value) {
  if (value === null) {
    return null;
  }
  if (metricKey.endsWith("Change")) {
    if (metricKey === "giniChange") {
      return value;
    }
    if (metricKey === "coreWelfareChange" || metricKey === "distributionWelfareChange") {
      return value;
    }
    return value * 100;
  }
  if (metricKey === "unemployment") {
    return value * 100;
  }
  return value;
}

function formatMetricValue(key, value) {
  const levelMetric = LEVEL_METRICS.find((metric) => metric.key === key);
  if (levelMetric) {
    return levelMetric.formatter(value);
  }
  const changeMetric = CHANGE_METRICS.find((metric) => metric.key === key);
  if (changeMetric) {
    return changeMetric.formatter(value);
  }
  return value === null ? "No data" : String(value);
}

function formatLevelValue(series, rawValue) {
  switch (series.key) {
    case "gdp":
    case "consumption":
    case "government":
      return formatBillions(rawValue);
    case "gdpPerCapita":
      return formatDollars0(rawValue);
    case "unemployment":
      return formatPercent(rawValue);
    case "gini":
      return formatGini(rawValue);
    case "employment":
      return formatThousands(rawValue);
    default:
      return rawValue === null ? "No data" : String(rawValue);
  }
}

function formatChangeValue(series, rawValue) {
  switch (series.key) {
    case "gini":
      return formatSignedGiniChange(rawValue);
    case "unemployment":
      return formatSignedPointChange(rawValue);
    default:
      return formatSignedPercent(rawValue);
  }
}

function formatBillions(value) {
  if (value === null) {
    return "No data";
  }
  return `$${formatNumber(value, 1)}B`;
}

function formatDollars0(value) {
  if (value === null) {
    return "No data";
  }
  return `$${formatNumber(value, 0)}`;
}

function formatPercent(value) {
  if (value === null) {
    return "No data";
  }
  return `${(value * 100).toFixed(2)}%`;
}

function formatThousands(value) {
  if (value === null) {
    return "No data";
  }
  return `${formatNumber(value, 0)} thousand`;
}

function formatMillions(value) {
  if (value === null) {
    return "No data";
  }
  return `${formatNumber(value, 2)} million`;
}

function formatGini(value) {
  if (value === null) {
    return "No data";
  }
  return value.toFixed(1);
}

function formatSignedPercent(value) {
  if (value === null) {
    return "No data";
  }
  return `${formatSigned(value * 100, 2)}%`;
}

function formatSignedPointChange(value) {
  if (value === null) {
    return "No data";
  }
  return `${formatSigned(value * 100, 2)} pp`;
}

function formatSignedGiniChange(value) {
  if (value === null) {
    return "No data";
  }
  return `${formatSigned(value, 1)} points`;
}

function formatIndexNumber(value) {
  if (value === null) {
    return "No data";
  }
  return value.toFixed(4);
}

function formatSignedIndexNumber(value) {
  if (value === null) {
    return "No data";
  }
  return formatSigned(value, 4);
}

function formatMultiplier(value) {
  if (value === null || !Number.isFinite(value)) {
    return "No data";
  }
  const absolute = Math.abs(value);
  if (absolute >= 0.1) {
    return value.toFixed(3);
  }
  if (absolute >= 0.01) {
    return value.toFixed(4);
  }
  if (absolute >= 0.001) {
    return value.toFixed(5);
  }
  return value.toFixed(6);
}

function formatNumber(value, digits) {
  return value.toLocaleString(undefined, {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits
  });
}

function formatSigned(value, digits) {
  const absolute = Math.abs(value).toLocaleString(undefined, {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits
  });
  if (value > 0) {
    return `+${absolute}`;
  }
  if (value < 0) {
    return `-${absolute}`;
  }
  return absolute;
}

function axisKey(prefix, rowIndex) {
  return rowIndex === 1 ? `${prefix}axis` : `${prefix}axis${rowIndex}`;
}

function traceAxisRef(prefix, rowIndex) {
  return rowIndex === 1 ? prefix : `${prefix}${rowIndex}`;
}
