export interface CoolerModel {
  model: string;
  capacityKW: number;
  areaM2: number;
  fanDiameterMM: number;
  airVolumeM3H: string;
  fanQty: number;
  fanVoltage: string;
  fanPowerW: string;
  rangeM: number;
  finDefrostPowerW: number;
  waterDefrostPowerW: number;
  defrostVoltageV: number;
}

export interface CoolerDimension {
  modelDL: string;
  modelDD: string;
  modelDJ: string;
  a: number; // Length
  b: number; // Width
  c: number; // Height
  d: number;
  e: number;
  e1: number | string;
  e2: number | string;
  e3: number | string;
  e4: number | string;
  inletTubeSize: number;
  outletTubeSize: number;
}

export interface FNHCondenserModel {
  model: string;
  heatExchangeKW: number;
  areaM2: number;
  rowRings: string;
  fanQty: number;
  fanPowerW: string;
  airVolumeM3H: string;
  windLeafMM: number;
  voltageV: number;
  inletTubeMM: number;
  outletTubeMM: number;
}

export interface FNHDimension {
  model: string;
  a: number;
  b: number;
  c: number;
  d: number;
  e: number;
  holeSizeMM: number;
}

export interface FNVCondenserModel {
  model: string;
  heatExchangeKW: number;
  areaM2: number;
  fanQty: number;
  fanPowerW: string;
  airVolumeM3H: string;
  windLeafMM: number;
  voltageV: number;
  inletTubeMM: number;
  outletTubeMM: number;
}

export interface RefrigerantItem {
  id: string;
  name: string;
  formula: string;
  application: string;
  applicationZh: string;
  boilingPoint: string;
  description: string;
  descriptionZh: string;
  color: string;
}

export interface FittingItem {
  id: string;
  page: 1 | 2;
  num: number;
  nameEn: string;
  nameZh: string;
  category: string;
  categoryZh: string;
  specs: string;
  description: string;
  descriptionZh: string;
  features: string[];
}

export const COMPANY_INFO = {
  nameZh: "山东华风制冷设备有限公司",
  nameEn: "SHANDONG HUAFENG REFRIGERATION EQUIPMENT CO., LTD.",
  brandName: "huafeng 华风制冷",
  slogan: "To Be Cool",
  establishedYear: 2013,
  introEn:
    "Shandong HuaFeng refrigeration equipment Co., Ltd. was established in 2013, China. The manufacturer of Air cooled Condenser Unit, Fan, Evaporator, Parallel set condensing unit, other refrigeration equipment and related accessories. Our company is a comprehensive enterprise integrating production, R&D, sales and service. HuaFeng welcome all your guests to visit our factory and guide to achieve win-win cooperation.",
  introZh:
    "山东华风制冷设备有限公司成立于2013年，公司主要生产冷凝机组，冷风机，螺杆机组等制冷设备及相关配件。我公司是一家集生产、研发、销售、服务为一体的综合性企业。华风欢迎各界人士莅临我厂参观指导，实现合作共赢。",
  contact: {
    telephones: [
      { label: "Malaysia", number: "+60194352738" },
      { label: "China (HQ)", number: "+86-13225312519" },
      { label: "Indonesia #1", number: "+62-82210514493" },
      { label: "Indonesia #2", number: "+62-87842927992" }
    ],
    factoryAddress: {
      en: "No. 7, Xiaoluzhuang industrial park, Tianqiao district, Jinan city, Shandong, China",
      zh: "中国山东省济南市天桥区小鲁庄工业园7号"
    },
    shopAddress: {
      en: "Lindeteves Trade Centre 2nd Floor, Blok A1 No. 12, 15, 16 (Near Food Court), Taman Sari, Mangga Besar, West Jakarta, Indonesia",
      zh: "印度尼西亚雅加达西区 Mangga Besar Taman Sari LTC林德特维斯商贸中心2层 Blok A1 No. 12, 15, 16 (美食广场旁)"
    },
    warehouseAddress: {
      en: "GUDANG TRITAN POINT WEDI, Jl. Raya Sedati, Tumapel, Wedi, Kec. Gedangan, Kabupaten Sidoarjo, (Blok C-50), East Java, zip code 61254, Indonesia",
      zh: "印度尼西亚东爪哇省 Sidoarjo县 Gedangan区 Wedi Tritan Point仓库 (Blok C-50), 邮编 61254"
    }
  }
};

export const CATALOG_TABLE_OF_CONTENTS = [
  { page: 1, titleEn: "D type Air cooler", titleZh: "D型冷风机", sectionId: "air-coolers" },
  { page: 2, titleEn: "DD in temperature Ceiling Type Air Cooler Technical Parameters", titleZh: "DD型中高温吊顶式冷风机技术参数", sectionId: "dd-parameters" },
  { page: 3, titleEn: "DJ Cryogenic Ceiling Type Air Cooler Technical Parameters", titleZh: "DJ型低温吊顶式冷风机技术参数", sectionId: "dj-parameters" },
  { page: 4, titleEn: "DL High Temperature Ceiling Type Air Cooler Technical Parameter", titleZh: "DL型高温吊顶式冷风机技术参数", sectionId: "dl-parameters" },
  { page: 5, titleEn: "D type cooler installing dimensions", titleZh: "D型冷风机安装尺寸", sectionId: "cooler-dimensions" },
  { page: 6, titleEn: "Types of air-cooled condenser", titleZh: "风冷冷凝器", sectionId: "condenser-types" },
  { page: 7, titleEn: "FNH type condenser technology parameters", titleZh: "FNH型冷凝器技术参数", sectionId: "fnh-parameters" },
  { page: 8, titleEn: "FNH overall and installing dimensions", titleZh: "FNH外形尺寸及安装尺寸", sectionId: "fnh-dimensions" },
  { page: 9, titleEn: "FNV type condenser technology parameters", titleZh: "FNV型冷凝器技术参数", sectionId: "fnv-parameters" },
  { page: 10, titleEn: "Refrigerant", titleZh: "制冷剂", sectionId: "refrigerants" },
  { page: 11, titleEn: "Refrigeration fittings (1)", titleZh: "制冷配件 (一)", sectionId: "fittings-1" },
  { page: 12, titleEn: "Refrigeration fittings (2)", titleZh: "制冷配件 (二)", sectionId: "fittings-2" },
];

export const DD_PARAMETERS: CoolerModel[] = [
  { model: "DD15", capacityKW: 3, areaM2: 15, fanDiameterMM: 350, airVolumeM3H: "2*2800", fanQty: 2, fanVoltage: "220/380", fanPowerW: "2*135", rangeM: 8, finDefrostPowerW: 1680, waterDefrostPowerW: 840, defrostVoltageV: 220 },
  { model: "DD22", capacityKW: 4, areaM2: 22, fanDiameterMM: 350, airVolumeM3H: "2*2800", fanQty: 2, fanVoltage: "220/380", fanPowerW: "2*135", rangeM: 10, finDefrostPowerW: 1680, waterDefrostPowerW: 840, defrostVoltageV: 220 },
  { model: "DD30", capacityKW: 5.7, areaM2: 30, fanDiameterMM: 400, airVolumeM3H: "2*3650", fanQty: 2, fanVoltage: "380", fanPowerW: "2*216", rangeM: 10, finDefrostPowerW: 2160, waterDefrostPowerW: 1080, defrostVoltageV: 220 },
  { model: "DD40", capacityKW: 8, areaM2: 40, fanDiameterMM: 400, airVolumeM3H: "2*3650", fanQty: 2, fanVoltage: "380", fanPowerW: "2*216", rangeM: 15, finDefrostPowerW: 2160, waterDefrostPowerW: 1080, defrostVoltageV: 220 },
  { model: "DD60", capacityKW: 11.5, areaM2: 60, fanDiameterMM: 500, airVolumeM3H: "2*7180", fanQty: 2, fanVoltage: "380", fanPowerW: "2*504", rangeM: 15, finDefrostPowerW: 4200, waterDefrostPowerW: 1400, defrostVoltageV: 220 },
  { model: "DD80", capacityKW: 16, areaM2: 80, fanDiameterMM: 500, airVolumeM3H: "3*7180", fanQty: 3, fanVoltage: "380", fanPowerW: "3*504", rangeM: 15, finDefrostPowerW: 6900, waterDefrostPowerW: 1400, defrostVoltageV: 220 },
  { model: "DD100", capacityKW: 19, areaM2: 100, fanDiameterMM: 500, airVolumeM3H: "3*7180", fanQty: 3, fanVoltage: "380", fanPowerW: "3*504", rangeM: 15, finDefrostPowerW: 8000, waterDefrostPowerW: 1720, defrostVoltageV: 220 },
  { model: "DD120", capacityKW: 24, areaM2: 120, fanDiameterMM: 500, airVolumeM3H: "3*7180", fanQty: 3, fanVoltage: "380", fanPowerW: "3*504", rangeM: 15, finDefrostPowerW: 9450, waterDefrostPowerW: 2000, defrostVoltageV: 220 },
  { model: "DD140", capacityKW: 28, areaM2: 140, fanDiameterMM: 500, airVolumeM3H: "4*7180", fanQty: 4, fanVoltage: "380", fanPowerW: "4*504", rangeM: 15, finDefrostPowerW: 10750, waterDefrostPowerW: 2360, defrostVoltageV: 220 },
  { model: "DD160", capacityKW: 33, areaM2: 160, fanDiameterMM: 500, airVolumeM3H: "4*7180", fanQty: 4, fanVoltage: "380", fanPowerW: "4*504", rangeM: 15, finDefrostPowerW: 12600, waterDefrostPowerW: 2680, defrostVoltageV: 220 },
  { model: "DD200", capacityKW: 37, areaM2: 200, fanDiameterMM: 500, airVolumeM3H: "4*7360", fanQty: 4, fanVoltage: "380", fanPowerW: "4*550", rangeM: 20, finDefrostPowerW: 14000, waterDefrostPowerW: 2520, defrostVoltageV: 220 },
  { model: "DD250", capacityKW: 47, areaM2: 250, fanDiameterMM: 600, airVolumeM3H: "3*13244", fanQty: 3, fanVoltage: "380", fanPowerW: "3*1500", rangeM: 20, finDefrostPowerW: 20160, waterDefrostPowerW: 2000, defrostVoltageV: 220 },
  { model: "DD310", capacityKW: 57, areaM2: 310, fanDiameterMM: 600, airVolumeM3H: "3*13244", fanQty: 3, fanVoltage: "380", fanPowerW: "3*1500", rangeM: 20, finDefrostPowerW: 26800, waterDefrostPowerW: 2520, defrostVoltageV: 220 },
  { model: "DD360", capacityKW: 67, areaM2: 360, fanDiameterMM: 600, airVolumeM3H: "4*13244", fanQty: 4, fanVoltage: "380", fanPowerW: "4*1500", rangeM: 20, finDefrostPowerW: 26800, waterDefrostPowerW: 2680, defrostVoltageV: 220 },
  { model: "DD440", capacityKW: 81, areaM2: 440, fanDiameterMM: 650, airVolumeM3H: "3*13500", fanQty: 3, fanVoltage: "380", fanPowerW: "3*2200", rangeM: 20, finDefrostPowerW: 26800, waterDefrostPowerW: 2680, defrostVoltageV: 220 },
];

export const DJ_PARAMETERS: CoolerModel[] = [
  { model: "DJ10", capacityKW: 1.6, areaM2: 10, fanDiameterMM: 350, airVolumeM3H: "2*2800", fanQty: 2, fanVoltage: "220/380", fanPowerW: "2*135", rangeM: 8, finDefrostPowerW: 2520, waterDefrostPowerW: 840, defrostVoltageV: 220 },
  { model: "DJ15", capacityKW: 2.3, areaM2: 15, fanDiameterMM: 350, airVolumeM3H: "2*2800", fanQty: 2, fanVoltage: "220/380", fanPowerW: "2*135", rangeM: 8, finDefrostPowerW: 2520, waterDefrostPowerW: 840, defrostVoltageV: 220 },
  { model: "DJ20", capacityKW: 3.6, areaM2: 20, fanDiameterMM: 400, airVolumeM3H: "2*3650", fanQty: 2, fanVoltage: "380", fanPowerW: "2*216", rangeM: 10, finDefrostPowerW: 3240, waterDefrostPowerW: 1080, defrostVoltageV: 220 },
  { model: "DJ30", capacityKW: 5.0, areaM2: 30, fanDiameterMM: 400, airVolumeM3H: "2*3650", fanQty: 2, fanVoltage: "380", fanPowerW: "2*216", rangeM: 10, finDefrostPowerW: 3240, waterDefrostPowerW: 1080, defrostVoltageV: 220 },
  { model: "DJ40", capacityKW: 7.3, areaM2: 40, fanDiameterMM: 500, airVolumeM3H: "2*7180", fanQty: 2, fanVoltage: "380", fanPowerW: "2*504", rangeM: 15, finDefrostPowerW: 5600, waterDefrostPowerW: 1400, defrostVoltageV: 220 },
  { model: "DJ55", capacityKW: 10.0, areaM2: 55, fanDiameterMM: 500, airVolumeM3H: "2*7180", fanQty: 2, fanVoltage: "380", fanPowerW: "2*504", rangeM: 15, finDefrostPowerW: 5600, waterDefrostPowerW: 1400, defrostVoltageV: 220 },
  { model: "DJ70", capacityKW: 12.0, areaM2: 70, fanDiameterMM: 500, airVolumeM3H: "2*7180", fanQty: 2, fanVoltage: "380", fanPowerW: "2*504", rangeM: 15, finDefrostPowerW: 8600, waterDefrostPowerW: 1720, defrostVoltageV: 220 },
  { model: "DJ85", capacityKW: 15.0, areaM2: 85, fanDiameterMM: 500, airVolumeM3H: "3*7180", fanQty: 3, fanVoltage: "380", fanPowerW: "3*504", rangeM: 15, finDefrostPowerW: 10000, waterDefrostPowerW: 2000, defrostVoltageV: 220 },
  { model: "DJ100", capacityKW: 17.0, areaM2: 100, fanDiameterMM: 500, airVolumeM3H: "3*7180", fanQty: 3, fanVoltage: "380", fanPowerW: "3*504", rangeM: 15, finDefrostPowerW: 11800, waterDefrostPowerW: 2360, defrostVoltageV: 220 },
  { model: "DJ115", capacityKW: 20.0, areaM2: 115, fanDiameterMM: 500, airVolumeM3H: "4*7180", fanQty: 4, fanVoltage: "380", fanPowerW: "4*504", rangeM: 15, finDefrostPowerW: 13400, waterDefrostPowerW: 2680, defrostVoltageV: 220 },
  { model: "DJ140", capacityKW: 24.0, areaM2: 140, fanDiameterMM: 500, airVolumeM3H: "4*7360", fanQty: 4, fanVoltage: "380", fanPowerW: "4*550", rangeM: 20, finDefrostPowerW: 15100, waterDefrostPowerW: 2520, defrostVoltageV: 220 },
  { model: "DJ170", capacityKW: 29.0, areaM2: 170, fanDiameterMM: 600, airVolumeM3H: "3*13244", fanQty: 3, fanVoltage: "380", fanPowerW: "3*1500", rangeM: 20, finDefrostPowerW: 16000, waterDefrostPowerW: 2000, defrostVoltageV: 220 },
  { model: "DJ210", capacityKW: 36.0, areaM2: 210, fanDiameterMM: 600, airVolumeM3H: "3*13244", fanQty: 3, fanVoltage: "380", fanPowerW: "3*1500", rangeM: 20, finDefrostPowerW: 22700, waterDefrostPowerW: 2520, defrostVoltageV: 220 },
  { model: "DJ250", capacityKW: 41.0, areaM2: 250, fanDiameterMM: 600, airVolumeM3H: "4*13244", fanQty: 4, fanVoltage: "380", fanPowerW: "4*1500", rangeM: 20, finDefrostPowerW: 24100, waterDefrostPowerW: 2680, defrostVoltageV: 220 },
  { model: "DJ300", capacityKW: 52.0, areaM2: 300, fanDiameterMM: 650, airVolumeM3H: "3*13500", fanQty: 3, fanVoltage: "380", fanPowerW: "3*2200", rangeM: 20, finDefrostPowerW: 29500, waterDefrostPowerW: 2680, defrostVoltageV: 220 },
];

export const DL_PARAMETERS: CoolerModel[] = [
  { model: "DL20", capacityKW: 4.3, areaM2: 20, fanDiameterMM: 350, airVolumeM3H: "2*2800", fanQty: 2, fanVoltage: "220/380", fanPowerW: "2*135", rangeM: 8, finDefrostPowerW: 840, waterDefrostPowerW: 840, defrostVoltageV: 220 },
  { model: "DL30", capacityKW: 5.3, areaM2: 30, fanDiameterMM: 350, airVolumeM3H: "2*2800", fanQty: 2, fanVoltage: "220/380", fanPowerW: "2*135", rangeM: 8, finDefrostPowerW: 840, waterDefrostPowerW: 840, defrostVoltageV: 220 },
  { model: "DL40", capacityKW: 8.2, areaM2: 40, fanDiameterMM: 400, airVolumeM3H: "2*3650", fanQty: 2, fanVoltage: "380", fanPowerW: "2*216", rangeM: 10, finDefrostPowerW: 1080, waterDefrostPowerW: 1080, defrostVoltageV: 220 },
  { model: "DL55", capacityKW: 12.0, areaM2: 55, fanDiameterMM: 400, airVolumeM3H: "2*3650", fanQty: 2, fanVoltage: "380", fanPowerW: "2*216", rangeM: 10, finDefrostPowerW: 1080, waterDefrostPowerW: 1080, defrostVoltageV: 220 },
  { model: "DL80", capacityKW: 17.0, areaM2: 80, fanDiameterMM: 500, airVolumeM3H: "2*7180", fanQty: 2, fanVoltage: "380", fanPowerW: "2*504", rangeM: 15, finDefrostPowerW: 2800, waterDefrostPowerW: 1400, defrostVoltageV: 220 },
  { model: "DL105", capacityKW: 22.0, areaM2: 105, fanDiameterMM: 500, airVolumeM3H: "2*7180", fanQty: 2, fanVoltage: "380", fanPowerW: "2*504", rangeM: 15, finDefrostPowerW: 2800, waterDefrostPowerW: 1400, defrostVoltageV: 220 },
  { model: "DL125", capacityKW: 26.0, areaM2: 125, fanDiameterMM: 500, airVolumeM3H: "3*7180", fanQty: 3, fanVoltage: "380", fanPowerW: "3*504", rangeM: 15, finDefrostPowerW: 5160, waterDefrostPowerW: 1720, defrostVoltageV: 220 },
  { model: "DL160", capacityKW: 33.0, areaM2: 160, fanDiameterMM: 500, airVolumeM3H: "3*7180", fanQty: 3, fanVoltage: "380", fanPowerW: "3*504", rangeM: 15, finDefrostPowerW: 6000, waterDefrostPowerW: 2000, defrostVoltageV: 220 },
  { model: "DL185", capacityKW: 38.0, areaM2: 185, fanDiameterMM: 500, airVolumeM3H: "4*7180", fanQty: 4, fanVoltage: "380", fanPowerW: "4*504", rangeM: 15, finDefrostPowerW: 7080, waterDefrostPowerW: 2360, defrostVoltageV: 220 },
  { model: "DL210", capacityKW: 44.0, areaM2: 210, fanDiameterMM: 500, airVolumeM3H: "4*7180", fanQty: 4, fanVoltage: "380", fanPowerW: "4*504", rangeM: 15, finDefrostPowerW: 8040, waterDefrostPowerW: 2680, defrostVoltageV: 220 },
  { model: "DL260", capacityKW: 53.0, areaM2: 260, fanDiameterMM: 500, airVolumeM3H: "4*7360", fanQty: 4, fanVoltage: "380", fanPowerW: "4*550", rangeM: 20, finDefrostPowerW: 10080, waterDefrostPowerW: 2520, defrostVoltageV: 220 },
  { model: "DL330", capacityKW: 67.0, areaM2: 330, fanDiameterMM: 600, airVolumeM3H: "3*13244", fanQty: 3, fanVoltage: "380", fanPowerW: "3*1500", rangeM: 20, finDefrostPowerW: 12000, waterDefrostPowerW: 2000, defrostVoltageV: 220 },
  { model: "DL410", capacityKW: 83.0, areaM2: 410, fanDiameterMM: 600, airVolumeM3H: "3*13244", fanQty: 3, fanVoltage: "380", fanPowerW: "3*1500", rangeM: 20, finDefrostPowerW: 17640, waterDefrostPowerW: 2520, defrostVoltageV: 220 },
  { model: "DL470", capacityKW: 94.0, areaM2: 470, fanDiameterMM: 600, airVolumeM3H: "4*13244", fanQty: 4, fanVoltage: "380", fanPowerW: "4*1500", rangeM: 20, finDefrostPowerW: 18760, waterDefrostPowerW: 2680, defrostVoltageV: 220 },
  { model: "DL580", capacityKW: 116.0, areaM2: 580, fanDiameterMM: 650, airVolumeM3H: "3*13500", fanQty: 3, fanVoltage: "380", fanPowerW: "3*2200", rangeM: 20, finDefrostPowerW: 24120, waterDefrostPowerW: 2680, defrostVoltageV: 220 },
];

export const COOLER_DIMENSIONS: CoolerDimension[] = [
  { modelDL: "DL20", modelDD: "DD15", modelDJ: "DJ10", a: 1250, b: 460, c: 490, d: 330, e: 990, e1: "-", e2: "-", e3: "-", e4: "-", inletTubeSize: 12, outletTubeSize: 22 },
  { modelDL: "DL25", modelDD: "DD22", modelDJ: "DJ15", a: 1250, b: 460, c: 490, d: 330, e: 990, e1: "-", e2: "-", e3: "-", e4: "-", inletTubeSize: 12, outletTubeSize: 22 },
  { modelDL: "DL30", modelDD: "DD30", modelDJ: "DJ20", a: 1600, b: 530, c: 700, d: 380, e: 1230, e1: "-", e2: "-", e3: "-", e4: "-", inletTubeSize: 16, outletTubeSize: 22 },
  { modelDL: "DL40", modelDD: "DD40", modelDJ: "DJ30", a: 1600, b: 530, c: 700, d: 380, e: 1230, e1: "-", e2: "-", e3: "-", e4: "-", inletTubeSize: 16, outletTubeSize: 25 },
  { modelDL: "DL55", modelDD: "DD60", modelDJ: "DJ40", a: 2000, b: 610, c: 780, d: 435, e: 1630, e1: 800, e2: 830, e3: "-", e4: "-", inletTubeSize: 19, outletTubeSize: 25 },
  { modelDL: "DL80", modelDD: "DD80", modelDJ: "DJ55", a: 2000, b: 610, c: 780, d: 435, e: 1630, e1: 800, e2: 830, e3: "-", e4: "-", inletTubeSize: 19, outletTubeSize: 35 },
  { modelDL: "DL105", modelDD: "DD100", modelDJ: "DJ70", a: 2350, b: 650, c: 840, d: 465, e: 2030, e1: 680, e2: 680, e3: 670, e4: "-", inletTubeSize: 19, outletTubeSize: 35 },
  { modelDL: "DL125", modelDD: "DD120", modelDJ: "DJ85", a: 2350, b: 650, c: 840, d: 465, e: 2030, e1: 680, e2: 680, e3: 670, e4: "-", inletTubeSize: 22, outletTubeSize: 35 },
  { modelDL: "DL160", modelDD: "DD140", modelDJ: "DJ100", a: 2700, b: 650, c: 840, d: 465, e: 2380, e1: 790, e2: 780, e3: 810, e4: "-", inletTubeSize: 22, outletTubeSize: 42 },
  { modelDL: "DL185", modelDD: "DD160", modelDJ: "DJ115", a: 3150, b: 650, c: 860, d: 465, e: 2830, e1: 700, e2: 700, e3: 700, e4: 730, inletTubeSize: 25, outletTubeSize: 50 },
  { modelDL: "DL210", modelDD: "DD200", modelDJ: "DJ140", a: 3550, b: 650, c: 860, d: 465, e: 3230, e1: 800, e2: 800, e3: 800, e4: 830, inletTubeSize: 25, outletTubeSize: 50 },
  { modelDL: "DL260", modelDD: "DD250", modelDJ: "DJ170", a: 2700, b: 950, c: 820, d: 605, e: 2380, e1: 790, e2: 780, e3: 810, e4: "-", inletTubeSize: 25, outletTubeSize: 50 },
  { modelDL: "DL330", modelDD: "DD310", modelDJ: "DJ210", a: 3400, b: 950, c: 920, d: 645, e: 3030, e1: 1000, e2: 1000, e3: 1030, e4: "-", inletTubeSize: 25, outletTubeSize: 50 },
  { modelDL: "DL410", modelDD: "DD360", modelDJ: "DJ250", a: 3550, b: 1050, c: 1020, d: 645, e: 3230, e1: 800, e2: 800, e3: 800, e4: 830, inletTubeSize: 25, outletTubeSize: 50 },
  { modelDL: "DL470", modelDD: "DD440", modelDJ: "DJ300", a: 3550, b: 1050, c: 1220, d: 645, e: 3230, e1: 800, e2: 800, e3: 800, e4: 830, inletTubeSize: 28, outletTubeSize: 50 },
];

export const FNH_PARAMETERS: FNHCondenserModel[] = [
  { model: "FNH-33", heatExchangeKW: 10.6, areaM2: 33, rowRings: "4*10", fanQty: 2, fanPowerW: "2*216", airVolumeM3H: "2*3650", windLeafMM: 400, voltageV: 380, inletTubeMM: 19, outletTubeMM: 16 },
  { model: "FNH-41", heatExchangeKW: 13.2, areaM2: 41, rowRings: "4*12", fanQty: 2, fanPowerW: "2*216", airVolumeM3H: "2*3650", windLeafMM: 400, voltageV: 380, inletTubeMM: 19, outletTubeMM: 16 },
  { model: "FNH-49", heatExchangeKW: 15.8, areaM2: 49, rowRings: "4*14", fanQty: 2, fanPowerW: "2*216", airVolumeM3H: "2*3650", windLeafMM: 400, voltageV: 380, inletTubeMM: 19, outletTubeMM: 16 },
  { model: "FNH-60", heatExchangeKW: 19.3, areaM2: 60, rowRings: "4*14", fanQty: 2, fanPowerW: "2*216", airVolumeM3H: "2*3650", windLeafMM: 400, voltageV: 380, inletTubeMM: 22, outletTubeMM: 19 },
  { model: "FNH-80", heatExchangeKW: 25.8, areaM2: 80, rowRings: "4*20", fanQty: 2, fanPowerW: "2*216", airVolumeM3H: "2*3650", windLeafMM: 400, voltageV: 380, inletTubeMM: 25, outletTubeMM: 19 },
  { model: "FNH-100", heatExchangeKW: 32.2, areaM2: 100, rowRings: "4*24", fanQty: 4, fanPowerW: "4*216", airVolumeM3H: "4*3650", windLeafMM: 400, voltageV: 380, inletTubeMM: 25, outletTubeMM: 19 },
  { model: "FNH-120", heatExchangeKW: 38.7, areaM2: 120, rowRings: "5*24", fanQty: 4, fanPowerW: "4*216", airVolumeM3H: "4*3650", windLeafMM: 400, voltageV: 380, inletTubeMM: 28, outletTubeMM: 22 },
  { model: "FNH-140", heatExchangeKW: 45.1, areaM2: 140, rowRings: "5*24", fanQty: 4, fanPowerW: "4*265", airVolumeM3H: "4*4601", windLeafMM: 450, voltageV: 380, inletTubeMM: 28, outletTubeMM: 22 },
  { model: "FNH-150", heatExchangeKW: 48.3, areaM2: 150, rowRings: "5*24", fanQty: 4, fanPowerW: "4*265", airVolumeM3H: "4*4601", windLeafMM: 450, voltageV: 380, inletTubeMM: 28, outletTubeMM: 22 },
  { model: "FNH-180", heatExchangeKW: 58.0, areaM2: 180, rowRings: "6*24", fanQty: 4, fanPowerW: "4*265", airVolumeM3H: "4*4601", windLeafMM: 450, voltageV: 380, inletTubeMM: 32, outletTubeMM: 25 },
  { model: "FNH-200", heatExchangeKW: 64.5, areaM2: 200, rowRings: "6*24", fanQty: 4, fanPowerW: "4*265", airVolumeM3H: "4*4601", windLeafMM: 450, voltageV: 380, inletTubeMM: 35, outletTubeMM: 25 },
  { model: "FNH-220", heatExchangeKW: 70.9, areaM2: 220, rowRings: "5*28", fanQty: 4, fanPowerW: "4*504", airVolumeM3H: "4*7180", windLeafMM: 500, voltageV: 380, inletTubeMM: 35, outletTubeMM: 28 },
  { model: "FNH-250", heatExchangeKW: 80.6, areaM2: 250, rowRings: "5*32", fanQty: 4, fanPowerW: "4*504", airVolumeM3H: "4*7180", windLeafMM: 500, voltageV: 380, inletTubeMM: 35, outletTubeMM: 28 },
  { model: "FNH-280", heatExchangeKW: 90.3, areaM2: 280, rowRings: "5*28", fanQty: 6, fanPowerW: "6*504", airVolumeM3H: "6*7180", windLeafMM: 500, voltageV: 380, inletTubeMM: 38, outletTubeMM: 32 },
  { model: "FNH-320", heatExchangeKW: 103.2, areaM2: 320, rowRings: "5*32", fanQty: 6, fanPowerW: "6*504", airVolumeM3H: "6*7180", windLeafMM: 500, voltageV: 380, inletTubeMM: 42, outletTubeMM: 35 },
];

export const FNH_DIMENSIONS: FNHDimension[] = [
  { model: "FNH-33", a: 950, b: 200, c: 530, d: 920, e: 135, holeSizeMM: 10 },
  { model: "FNH-41", a: 950, b: 200, c: 630, d: 920, e: 135, holeSizeMM: 10 },
  { model: "FNH-49", a: 950, b: 200, c: 730, d: 920, e: 135, holeSizeMM: 10 },
  { model: "FNH-60", a: 1160, b: 200, c: 730, d: 1030, e: 135, holeSizeMM: 10 },
  { model: "FNH-80", a: 1080, b: 220, c: 1030, d: 1050, e: 135, holeSizeMM: 10 },
  { model: "FNH-100", a: 1080, b: 220, c: 1230, d: 1050, e: 155, holeSizeMM: 10 },
  { model: "FNH-120", a: 1235, b: 220, c: 1230, d: 1205, e: 155, holeSizeMM: 10 },
  { model: "FNH-140", a: 1330, b: 250, c: 1230, d: 1300, e: 155, holeSizeMM: 10 },
  { model: "FNH-150", a: 1330, b: 250, c: 1230, d: 1300, e: 185, holeSizeMM: 10 },
  { model: "FNH-180", a: 1410, b: 250, c: 1230, d: 1380, e: 185, holeSizeMM: 10 },
  { model: "FNH-200", a: 1620, b: 250, c: 1230, d: 1590, e: 185, holeSizeMM: 10 },
  { model: "FNH-220", a: 1620, b: 250, c: 1450, d: 1590, e: 185, holeSizeMM: 10 },
  { model: "FNH-250", a: 1620, b: 250, c: 1650, d: 1590, e: 185, holeSizeMM: 10 },
  { model: "FNH-280", a: 2080, b: 250, c: 1450, d: 2050, e: 185, holeSizeMM: 10 },
  { model: "FNH-320", a: 2080, b: 250, c: 1650, d: 2050, e: 185, holeSizeMM: 10 },
];

export const FNV_PARAMETERS: FNVCondenserModel[] = [
  { model: "FNV-160", heatExchangeKW: 51.6, areaM2: 160, fanQty: 2, fanPowerW: "2*504", airVolumeM3H: "2*7180", windLeafMM: 500, voltageV: 380, inletTubeMM: 28, outletTubeMM: 22 },
  { model: "FNV-180", heatExchangeKW: 58.0, areaM2: 180, fanQty: 2, fanPowerW: "2*504", airVolumeM3H: "2*7180", windLeafMM: 500, voltageV: 380, inletTubeMM: 28, outletTubeMM: 22 },
  { model: "FNV-200", heatExchangeKW: 64.5, areaM2: 200, fanQty: 3, fanPowerW: "3*504", airVolumeM3H: "3*7180", windLeafMM: 500, voltageV: 380, inletTubeMM: 32, outletTubeMM: 22 },
  { model: "FNV-240", heatExchangeKW: 77.4, areaM2: 240, fanQty: 3, fanPowerW: "3*504", airVolumeM3H: "3*7180", windLeafMM: 500, voltageV: 380, inletTubeMM: 32, outletTubeMM: 25 },
  { model: "FNV-260", heatExchangeKW: 83.8, areaM2: 260, fanQty: 3, fanPowerW: "3*504", airVolumeM3H: "3*7180", windLeafMM: 500, voltageV: 380, inletTubeMM: 32, outletTubeMM: 25 },
  { model: "FNV-300", heatExchangeKW: 96.7, areaM2: 300, fanQty: 3, fanPowerW: "3*825", airVolumeM3H: "3*10200", windLeafMM: 600, voltageV: 380, inletTubeMM: 35, outletTubeMM: 25 },
  { model: "FNV-320", heatExchangeKW: 103.2, areaM2: 320, fanQty: 3, fanPowerW: "3*825", airVolumeM3H: "3*10200", windLeafMM: 600, voltageV: 380, inletTubeMM: 38, outletTubeMM: 28 },
  { model: "FNV-360", heatExchangeKW: 116.1, areaM2: 360, fanQty: 4, fanPowerW: "4*504", airVolumeM3H: "4*7180", windLeafMM: 500, voltageV: 380, inletTubeMM: 42, outletTubeMM: 28 },
  { model: "FNV-400", heatExchangeKW: 129.0, areaM2: 400, fanQty: 4, fanPowerW: "4*825", airVolumeM3H: "4*10200", windLeafMM: 600, voltageV: 380, inletTubeMM: 42, outletTubeMM: 28 },
];

export const REFRIGERANTS: RefrigerantItem[] = [
  {
    id: "r134a",
    name: "R134a",
    formula: "CH2FCF3 (1,1,1,2-Tetrafluoroethane)",
    application: "Automotive AC, domestic refrigeration, medium-temp commercial chillers",
    applicationZh: "汽车空调、家用冰箱、商业中温冷水机组及工业制冷系统",
    boilingPoint: "-26.1 °C",
    description: "High-purity HFC refrigerant with zero ODP (Ozone Depletion Potential). Features outstanding thermodynamic stability, non-toxicity, and non-flammability under standard conditions.",
    descriptionZh: "高纯度环保无氟HFC制冷剂，臭氧消耗潜值(ODP)为0。具有极佳的热力学稳定性、无毒不燃，适用于中温制冷领域。",
    color: "#0284c7"
  },
  {
    id: "r507a",
    name: "R507A",
    formula: "HFC-125 / HFC-143a (50% / 50%)",
    application: "Commercial low-temperature cold rooms, blast freezers, supermarket display cases",
    applicationZh: "商业低温冷库、速冻冷库、冷藏车、超市冷柜及低温深冷机组",
    boilingPoint: "-46.7 °C",
    description: "Azeotropic mixture HFC refrigerant serving as the ultimate retrofit for R502 and R22 in low-temperature refrigeration systems. Excellent cooling capacity and compressor discharge temperature control.",
    descriptionZh: "共沸型混合HFC环保制冷剂，是R502和低温R22的理想替代品。具有优越的低温制冷效率和较低的压缩机排气温度。",
    color: "#059669"
  },
  {
    id: "r410a",
    name: "R410A",
    formula: "HFC-32 / HFC-125 (50% / 50%)",
    application: "Residential & commercial split air conditioners, heat pumps, multi-connected systems",
    applicationZh: "家用及商用分体式空调、变频多联机VRF、空气源热泵系统",
    boilingPoint: "-51.4 °C",
    description: "Near-azeotropic blend with high operating pressure and superior volumetric cooling capacity, enabling compact heat exchanger designs with exceptional seasonal energy efficiency ratios.",
    descriptionZh: "近共沸环保制冷剂，工作压力较高，单位容积制冷量大，可大幅缩小换热器尺寸，具备极佳的系统能效比。",
    color: "#e11d48"
  },
  {
    id: "r404a",
    name: "R404A",
    formula: "HFC-125 / HFC-143a / HFC-134a (44% / 52% / 4%)",
    application: "Walk-in cold storage, food transport, ice machines, freezer rooms",
    applicationZh: "步入式冷藏库、冷冻冷库、冷链运输、制冰机、超市冷链冷柜",
    boilingPoint: "-46.5 °C",
    description: "Industry-standard non-ozone depleting HFC blend widely accepted for medium and low-temperature commercial refrigeration with proven field reliability and performance.",
    descriptionZh: "行业广泛认可的中低温商业制冷标准HFC混合物，零ODP，运行工况平稳可靠，与各类合成润滑油兼容性好。",
    color: "#ea580c"
  },
];

export const REFRIGERATION_FITTINGS: FittingItem[] = [
  // Page 8: Fittings (1)
  {
    id: "compressor",
    page: 1,
    num: 1,
    nameEn: "Compressor",
    nameZh: "压缩机",
    category: "Power Unit",
    categoryZh: "动力核心",
    specs: "Semi-hermetic Reciprocating / Screw (0.5HP - 50HP)",
    description: "Heavy-duty semi-hermetic refrigeration compressor engineered for high volumetric efficiency, smooth vibration-damped operation, and long service life.",
    descriptionZh: "半封闭活塞/螺杆制冷压缩机，容积效率高，运行震动小，具备优异的耐磨性与超长寿命。",
    features: ["Semi-hermetic design", "High COP efficiency", "Multi-refrigerant compatible"]
  },
  {
    id: "solenoid_valve",
    page: 1,
    num: 2,
    nameEn: "Solenoid valve",
    nameZh: "电磁阀",
    category: "Flow Control",
    categoryZh: "流体控制",
    specs: "Cast brass body, 220V/24V coils, 1/4\" - 1-1/8\" ODF",
    description: "Precision electromagnetic shut-off valve for liquid, suction, and hot gas lines with rapid sealing and high pressure resistance.",
    descriptionZh: "精密黄铜冷媒电磁通断阀，适用于液体管、吸气管及热气旁通回路，响应迅速，密封可靠。",
    features: ["Hermetic coil encapsulation", "Zero leakage seat", "High differential pressure rating"]
  },
  {
    id: "check_valve",
    page: 1,
    num: 3,
    nameEn: "Check valve",
    nameZh: "单向阀",
    category: "Flow Control",
    categoryZh: "流体控制",
    specs: "Straight-through solder connection, 1/4\" - 2-1/8\"",
    description: "Non-return directional check valve preventing refrigerant backflow into compressor and evaporator lines during shutdown.",
    descriptionZh: "直通单向止回阀，防止停机时冷媒及润滑油倒流至压缩机与蒸发器，保护系统平稳。",
    features: ["Low opening pressure", "Teflon sealing disc", "Stainless internal spring"]
  },
  {
    id: "vibration_absorber",
    page: 1,
    num: 4,
    nameEn: "Vibration absorber",
    nameZh: "避震管",
    category: "Piping & Protection",
    categoryZh: "管路减震",
    specs: "Stainless corrugated bellows with wire braid, copper ends",
    description: "Deep corrugated flexible stainless steel vibration eliminator installed on compressor discharge and suction lines to dampen motor vibrations.",
    descriptionZh: "不锈钢金属波纹避震管，外层高强度钢丝网编织，吸收压缩机运转产生的振动与管道应力。",
    features: ["High tensile wire braiding", "Seamless bronze/SS corrugation", "Helium leak tested"]
  },
  {
    id: "diaphragm_valve",
    page: 1,
    num: 5,
    nameEn: "KM Diaphragm hand valve",
    nameZh: "手阀 KM",
    category: "Manual Valves",
    categoryZh: "手动截流",
    specs: "Multi-ply metallic diaphragm, packless, 1/4\" - 7/8\"",
    description: "Packless diaphragm isolation hand valve with bidirectional flow design, eliminating packing gland stem leaks entirely.",
    descriptionZh: "无填料金属多层膜片手阀，双向流通设计，彻底根除阀杆填料漏气隐患，便于维护检修。",
    features: ["Zero stem gland leakage", "Ergonomic handwheel", "High flow coefficient"]
  },
  {
    id: "sight_glass",
    page: 1,
    num: 6,
    nameEn: "Sight glass",
    nameZh: "视液镜",
    category: "Monitoring",
    categoryZh: "状态监测",
    specs: "Brass body with moisture indicator ring (Green/Yellow)",
    description: "In-line liquid line sight glass with moisture indicator element providing direct visualization of refrigerant bubble condition and moisture content.",
    descriptionZh: "管路视液镜，内置高敏度湿度变色指示环（绿色干燥/黄色潮湿），直观监测冷媒充注量与系统水分。",
    features: ["Dual-function (bubbles + moisture)", "Solder/Flare options", "Impact-resistant glass"]
  },
  {
    id: "take_apart_filter_shell",
    page: 1,
    num: 7,
    nameEn: "Steel take-apart filter drier shell",
    nameZh: "过滤筒",
    category: "Filtration",
    categoryZh: "系统过滤",
    specs: "Flanged steel shell for 48 cu.in cores (single/multi-core)",
    description: "Heavy-gauge flanged steel filter drier shell for replaceable standard 48-cubic-inch desiccant or suction line filter cores.",
    descriptionZh: "可拆卸法兰钢制干燥过滤器壳体，适配标准48型可更换滤芯，便于大中型冷库长期更换滤芯保养。",
    features: ["Corrosion-resistant epoxy finish", "Removable flange end", "High volume debris capture"]
  },
  {
    id: "oil_separator",
    page: 1,
    num: 8,
    nameEn: "Oil separator",
    nameZh: "油分离器",
    category: "Oil Management",
    categoryZh: "油路管理",
    specs: "Helical centrifugal type with float needle return mechanism",
    description: "High-efficiency helical centrifugal oil separator returning captured compressor lubricant back to the crankcase, ensuring heat transfer efficiency.",
    descriptionZh: "离心式高效螺旋油分离器，利用精密浮球针阀将排气冷媒中的润滑油分离并自动回流至压缩机曲轴箱。",
    features: ["99% oil separation efficiency", "Precision float valve", "Copper sweat connections"]
  },
  {
    id: "ball_valve",
    page: 1,
    num: 9,
    nameEn: "Ball valve",
    nameZh: "球阀",
    category: "Manual Valves",
    categoryZh: "手动截流",
    specs: "Bi-directional full port, 1/4\" - 3-1/8\", access port option",
    description: "Full bore brass refrigeration ball valve providing unrestricted straight-through flow with minimum pressure drop and quarter-turn shutoff.",
    descriptionZh: "全通径黄铜冷媒球阀，流阻极低，90度旋转快开快关，带或不带充注针阀接口。",
    features: ["Full port minimal pressure drop", "Double O-ring stem seal", "Hermetic laser welded body"]
  },
  {
    id: "filter_drier",
    page: 1,
    num: 10,
    nameEn: "Filter",
    nameZh: "过滤器",
    category: "Filtration",
    categoryZh: "系统过滤",
    specs: "Hermetic sealed copper/steel liquid line filter drier",
    description: "Hermetically sealed molecular sieve filter drier for solid core moisture and acid removal in small to mid-sized refrigeration circuits.",
    descriptionZh: "全封闭式液体管路干燥过滤器，采用高效复合分子筛，强力吸附水分与游离酸质。",
    features: ["High moisture adsorption", "Solid composite core", "Low pressure loss"]
  },
  {
    id: "liquid_receiver",
    page: 1,
    num: 11,
    nameEn: "Liquid reservoir",
    nameZh: "储液器",
    category: "Vessels",
    categoryZh: "压力容器",
    specs: "Horizontal / Vertical high pressure vessel with rotalock valves",
    description: "High pressure certified steel liquid receiver designed to store fluctuating liquid refrigerant inventory and ensure steady liquid subcooling feed.",
    descriptionZh: "高压钢制储液器，储存系统循环冷媒，平衡制冷负荷变动带来的液位波动，确保膨胀阀前过冷供液。",
    features: ["Pressure certified safety valve port", "Sight glass port option", "Durable epoxy coating"]
  },
  {
    id: "accumulator",
    page: 1,
    num: 12,
    nameEn: "Accumulator",
    nameZh: "气液分离器",
    category: "Vessels",
    categoryZh: "压力容器",
    specs: "Suction accumulator with U-tube orifice and heat exchange coil",
    description: "Suction line accumulator preventing sudden liquid refrigerant slugging into the compressor during defrost or transient load swings.",
    descriptionZh: "吸气管气液分离器，内部带U型回油节流孔，阻止液态冷媒瞬间倒灌入压缩机造成液击，保障安全。",
    features: ["Internal U-tube metering orifice", "Anti-slug baffle", "Powder coated corrosion protection"]
  },

  // Page 9: Fittings (2)
  {
    id: "pressure_gauge",
    page: 2,
    num: 13,
    nameEn: "Pressure gauge",
    nameZh: "高低压油表",
    category: "Instrumentation",
    categoryZh: "仪表测试",
    specs: "High (Red 0-500 PSI) & Low (Blue 0-250 PSI), oil-filled",
    description: "Glycerine-filled dual refrigeration pressure gauges with temperature saturated scales for R22, R134a, R404A, R410A.",
    descriptionZh: "充油防震高低压冷媒压力表（红高蓝低），表盘含多种冷媒饱和温度对应刻度，指针平稳抗脉冲。",
    features: ["Glycerine dampening", "Color-coded dual dials", "1/4\" NPT bottom/back connection"]
  },
  {
    id: "expansion_valve",
    page: 2,
    num: 14,
    nameEn: "Expansion valve",
    nameZh: "膨胀阀",
    category: "Metering",
    categoryZh: "节流机构",
    specs: "Thermostatic TXV with interchangeable orifice cages",
    description: "Thermostatic expansion valve with external equalization controlling evaporator superheat accurately across broad temperature ranges.",
    descriptionZh: "热力膨胀阀（带外平衡），可更换阀芯组件，精密调节蒸发器出口过热度，实现最高制冷效能。",
    features: ["Interchangeable orifice assemblies", "Stainless steel thermal bulb", "Wide operating spectrum"]
  },
  {
    id: "copper_fittings",
    page: 2,
    num: 15,
    nameEn: "Copper pipe fittings",
    nameZh: "铜管件",
    category: "Piping & Joints",
    categoryZh: "铜管配件",
    specs: "ASME B16.22 99.9% pure deoxidized copper (Elbows, Tees, P-traps)",
    description: "High-grade seamless ACR deoxidized copper fittings including 90° short/long elbows, equal/reducing tees, and return U-bends.",
    descriptionZh: "高纯度脱氧紫铜管件系列，包含90度弯头、正三通、异径三通、存油弯及U型回弯，耐压承载高。",
    features: ["Seamless phosphor deoxidized copper", "Precision solder cup tolerances", "UL & CE compliant"]
  },
  {
    id: "oil_gauge_dial",
    page: 2,
    num: 16,
    nameEn: "Oil gauge dial",
    nameZh: "油表表盘",
    category: "Instrumentation",
    categoryZh: "仪表测试",
    specs: "Precision painted industrial dual & triple gauge mounting bracket",
    description: "Powder-coated steel bracket and dial panel for centralized manifold gauge installation on condensing units and compressor racks.",
    descriptionZh: "冷凝机组/并联机组压力表安装固定盘与支架，绿色工业喷塑，方便集中巡检与仪表加固。",
    features: ["Heavy gauge sheet steel", "Vibration damping grommets", "Industrial green finish"]
  },
  {
    id: "electric_cabinet",
    page: 2,
    num: 17,
    nameEn: "Electric cabinet",
    nameZh: "配电箱",
    category: "Controls & Automation",
    categoryZh: "电控系统",
    specs: "Microprocessor cold room controller box with contactors & breakers",
    description: "Pre-wired complete cold storage electrical control cabinet integrating temperature display, compressor contactor, defrost timer, and phase protection.",
    descriptionZh: "冷库全自动综合微电脑电控箱，集成双温显屏、交流接触器、热继电器、缺相保护及除霜联动控制。",
    features: ["All-in-one pre-wired panel", "Phase loss & overload protection", "Digital status readout"]
  },
  {
    id: "fan_motor",
    page: 2,
    num: 18,
    nameEn: "Fan motor",
    nameZh: "风扇电机",
    category: "Air Movement",
    categoryZh: "通风动力",
    specs: "External rotor axial fan motor with protective grille (300-650mm)",
    description: "High airflow external rotor axial fan motor equipped with powder-coated protective wire cage for condensers and evaporators.",
    descriptionZh: "外转子轴流风机电机，配高强度防飞溅防护网罩，风量强劲、噪音低、防潮防尘等级高。",
    features: ["External rotor compact structure", "IP54 protection rating", "Maintenance-free ball bearings"]
  },
  {
    id: "pressure_hose",
    page: 2,
    num: 19,
    nameEn: "Pressure hose",
    nameZh: "压力软管",
    category: "Instrumentation",
    categoryZh: "仪表管路",
    specs: "High pressure nylon reinforced capillary charging hoses (Red/Blue/Black)",
    description: "High-flexibility multi-colored capillary pressure connecting hose with 1/4\" SAE swivel nuts for pressure transmitters and gauges.",
    descriptionZh: "多色增强尼龙毛细压力测压软管，抗高压抗冷冻油腐蚀，端头带1/4\"SAE旋转接头，拆装便捷。",
    features: ["Working pressure 600 PSI / Burst 3000 PSI", "Knurled brass fittings", "Depressor tip valves"]
  },
  {
    id: "balanced_window",
    page: 2,
    num: 20,
    nameEn: "Balanced window",
    nameZh: "平衡窗",
    category: "Cold Room Enclosure",
    categoryZh: "冷库库体",
    specs: "Heated dual-direction cold storage pressure relief port",
    description: "Dual-directional pressure equalization vent window with built-in electric heating element to prevent cold room wall structural deformation during defrost.",
    descriptionZh: "冷库双向正负压平衡窗（内置电加热防冻丝），防止冷库除霜或快速降温时库体内外气压差过大造成库体胀裂或坍塌。",
    features: ["Self-regulating heater wire", "Double silicone flap sealing", "Stainless outer housing"]
  },
  {
    id: "temperature_controller",
    page: 2,
    num: 21,
    nameEn: "Temperature controller",
    nameZh: "温度控制器",
    category: "Controls & Automation",
    categoryZh: "电控系统",
    specs: "Digital microcomputer thermostat with dual NTC temperature sensor probes",
    description: "Intelligent digital temperature controller featuring cooling, defrosting, fan control, temperature calibration, and high/low limit alarms.",
    descriptionZh: "智能微电脑温控器，双路NTC高精度探头，支持制冷、化霜、风机三路独立输出及超温上下限蜂鸣报警。",
    features: ["Dual probe measurement", "One-key parameter copy", "Flame-retardant ABS case"]
  },
  {
    id: "pressure_control",
    page: 2,
    num: 22,
    nameEn: "Pressure control",
    nameZh: "压力控制器",
    category: "Safety Controls",
    categoryZh: "安全保护",
    specs: "Dual high/low pressure switch (Auto/Manual reset)",
    description: "Adjustable dual refrigeration pressure switch protecting compressor from excessively low suction pressure or dangerously high discharge pressure.",
    descriptionZh: "可调式高低压双联压力控制器，超高压切断停机、超低压吸气保护，可选自动或手动复位模式。",
    features: ["SPDT double-throw contact", "Wide setting scale", "Bellows reliability tested"]
  },
  {
    id: "lampu_led",
    page: 2,
    num: 23,
    nameEn: "Lampu LED",
    nameZh: "冷库灯",
    category: "Lighting",
    categoryZh: "冷库照明",
    specs: "IP65 waterproof & freeze-proof LED luminaire (-40°C rated)",
    description: "Specialized ultra-low temperature cold storage LED ceiling light with IP65 moisture sealing, instant start at -40°C, and high lumen efficiency.",
    descriptionZh: "专业超低温冷库专用防潮防爆LED灯具，耐-40℃低温瞬间启动，IP65全密封硅胶防水圈，光衰极小。",
    features: ["Freeze-proof down to -40°C", "Die-cast aluminum heat sink", "Shatterproof PC diffuser"]
  },
  {
    id: "refrigeration_oil",
    page: 2,
    num: 24,
    nameEn: "Refrigeration oil",
    nameZh: "冷冻油",
    category: "Lubricants",
    categoryZh: "专用油品",
    specs: "POE 68 / POE 32 synthetic polyol ester refrigeration lubricant",
    description: "High performance synthetic polyol ester (POE) refrigeration compressor oil specifically designed for HFC systems (R134a, R404A, R507A, R410A).",
    descriptionZh: "高品质合成多元醇酯(POE 68/32)冷冻机油，专为HFC环保冷媒(R404A/R507A/R134a/R410A)设计，抗磨极佳，粘度指数高。",
    features: ["Superior chemical stability", "Optimal oil return solubility", "High dielectric strength"]
  }
];
