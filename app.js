// Periodic Table Application JavaScript

class PeriodicTableApp {
    constructor() {
        this.elements = [];
        this.groupTrends = {};
        this.detectionMethods = {};
        this.reactionTypes = {};
        this.groups = {};
        this.periodicTrends = {};
        this.selectedElement = null;
        this.filteredElements = [];
        
        this.init();
    }

    async init() {
        try {
            await this.loadData();
            this.createPeriodicTable();
            this.setupEventListeners();
            this.populateEducationalContent();
            this.populateFilters();
        } catch (error) {
            console.error('Error initializing application:', error);
            this.showError('Failed to load periodic table data.');
        }
    }

    async loadData() {
        // Using the provided data structure
        const data = {
            "elements": [
                {
                    "atomicNumber": 1,
                    "symbol": "H",
                    "name": "Hydrogen",
                    "atomicMass": 1.008,
                    "group": 1,
                    "period": 1,
                    "block": "s",
                    "category": "nonmetal",
                    "electrons": [1],
                    "protons": 1,
                    "neutrons": 0,
                    "oxidationStates": [1, -1],
                    "commonReactions": [
                        "H2 + O2 → H2O (Water formation)",
                        "H2 + Cl2 → 2HCl (Hydrogen chloride)",
                        "2H2 + O2 → 2H2O (Combustion)"
                    ],
                    "reactivity": "Highly reactive, burns readily in air",
                    "detectionTest": "Pop test - produces a 'pop' sound when lit with a splint",
                    "description": "Lightest element, essential for life, fuel for stars",
                    "physicalProperties": {
                        "meltingPoint": -259.16,
                        "boilingPoint": -252.87,
                        "density": 0.00008988,
                        "state": "gas"
                    }
                },
                {
                    "atomicNumber": 2,
                    "symbol": "He",
                    "name": "Helium",
                    "atomicMass": 4.003,
                    "group": 18,
                    "period": 1,
                    "block": "s",
                    "category": "noble gas",
                    "electrons": [2],
                    "protons": 2,
                    "neutrons": 2,
                    "oxidationStates": [0],
                    "commonReactions": ["No common reactions - chemically inert"],
                    "reactivity": "Completely unreactive under normal conditions",
                    "detectionTest": "Spectroscopic analysis shows characteristic emission lines",
                    "description": "Second lightest element, noble gas, used in balloons",
                    "physicalProperties": {
                        "meltingPoint": -272.2,
                        "boilingPoint": -268.93,
                        "density": 0.0001785,
                        "state": "gas"
                    }
                },
                {
                    "atomicNumber": 3,
                    "symbol": "Li",
                    "name": "Lithium",
                    "atomicMass": 6.941,
                    "group": 1,
                    "period": 2,
                    "block": "s",
                    "category": "alkali metal",
                    "electrons": [2, 1],
                    "protons": 3,
                    "neutrons": 4,
                    "oxidationStates": [1],
                    "commonReactions": [
                        "2Li + 2H2O → 2LiOH + H2 (Reacts with water)",
                        "4Li + O2 → 2Li2O (Oxidation)",
                        "2Li + Cl2 → 2LiCl (Halide formation)"
                    ],
                    "reactivity": "Very reactive, must be stored in oil",
                    "detectionTest": "Flame test produces brilliant crimson/red color",
                    "description": "Lightest metal, used in batteries and mood stabilizers",
                    "physicalProperties": {
                        "meltingPoint": 180.54,
                        "boilingPoint": 1342,
                        "density": 0.534,
                        "state": "solid"
                    }
                },
                {
                    "atomicNumber": 4,
                    "symbol": "Be",
                    "name": "Beryllium",
                    "atomicMass": 9.012,
                    "group": 2,
                    "period": 2,
                    "block": "s",
                    "category": "alkaline earth metal",
                    "electrons": [2, 2],
                    "protons": 4,
                    "neutrons": 5,
                    "oxidationStates": [2],
                    "commonReactions": [
                        "Be + 2H2O → Be(OH)2 + H2 (Reacts slowly with water)",
                        "Be + F2 → BeF2 (Beryllium fluoride)",
                        "Be + O2 → BeO (Oxidation)"
                    ],
                    "reactivity": "Less reactive than other alkaline earth metals",
                    "detectionTest": "Forms a complex with ammonia, detected by spectroscopy",
                    "description": "Toxic light metal, used in aerospace alloys",
                    "physicalProperties": {
                        "meltingPoint": 1287,
                        "boilingPoint": 2470,
                        "density": 1.85,
                        "state": "solid"
                    }
                },
                {
                    "atomicNumber": 6,
                    "symbol": "C",
                    "name": "Carbon",
                    "atomicMass": 12.011,
                    "group": 14,
                    "period": 2,
                    "block": "p",
                    "category": "nonmetal",
                    "electrons": [2, 4],
                    "protons": 6,
                    "neutrons": 6,
                    "oxidationStates": [-4, -3, -2, -1, 0, 1, 2, 3, 4],
                    "commonReactions": [
                        "C + O2 → CO2 (Combustion)",
                        "C + 2F2 → CF4 (Tetrafluoromethane)",
                        "2C + O2 → 2CO (Incomplete combustion)"
                    ],
                    "reactivity": "Varies by allotrope; graphite is reactive, diamond is not",
                    "detectionTest": "Combustion to CO2 which turns limewater milky",
                    "description": "Basis of organic chemistry, exists in multiple allotropes",
                    "physicalProperties": {
                        "meltingPoint": 3550,
                        "boilingPoint": 4827,
                        "density": 2.267,
                        "state": "solid"
                    }
                },
                {
                    "atomicNumber": 7,
                    "symbol": "N",
                    "name": "Nitrogen",
                    "atomicMass": 14.007,
                    "group": 15,
                    "period": 2,
                    "block": "p",
                    "category": "nonmetal",
                    "electrons": [2, 5],
                    "protons": 7,
                    "neutrons": 7,
                    "oxidationStates": [-3, -2, -1, 1, 2, 3, 4, 5],
                    "commonReactions": [
                        "N2 + 3H2 → 2NH3 (Haber process)",
                        "N2 + O2 → 2NO (At high temperature)",
                        "6Li + N2 → 2Li3N (With reactive metals)"
                    ],
                    "reactivity": "Relatively inert at room temperature due to triple bond",
                    "detectionTest": "Lassaigne's test - sodium fusion followed by iron(II) sulfate produces Prussian blue",
                    "description": "Makes up 78% of atmosphere, essential for proteins",
                    "physicalProperties": {
                        "meltingPoint": -210.1,
                        "boilingPoint": -195.79,
                        "density": 0.001251,
                        "state": "gas"
                    }
                },
                {
                    "atomicNumber": 8,
                    "symbol": "O",
                    "name": "Oxygen",
                    "atomicMass": 15.999,
                    "group": 16,
                    "period": 2,
                    "block": "p",
                    "category": "nonmetal",
                    "electrons": [2, 6],
                    "protons": 8,
                    "neutrons": 8,
                    "oxidationStates": [-2, -1, 0, 1, 2],
                    "commonReactions": [
                        "2Mg + O2 → 2MgO (Metal oxide formation)",
                        "C + O2 → CO2 (Combustion)",
                        "4P + 5O2 → P4O10 (Phosphorus oxidation)"
                    ],
                    "reactivity": "Very reactive, supports combustion",
                    "detectionTest": "Glowing splint test - a glowing splint reignites in oxygen",
                    "description": "Essential for respiration, makes up 21% of atmosphere",
                    "physicalProperties": {
                        "meltingPoint": -218.79,
                        "boilingPoint": -182.95,
                        "density": 0.001429,
                        "state": "gas"
                    }
                },
                {
                    "atomicNumber": 9,
                    "symbol": "F",
                    "name": "Fluorine",
                    "atomicMass": 18.998,
                    "group": 17,
                    "period": 2,
                    "block": "p",
                    "category": "halogen",
                    "electrons": [2, 7],
                    "protons": 9,
                    "neutrons": 10,
                    "oxidationStates": [-1],
                    "commonReactions": [
                        "F2 + 2NaCl → 2NaF + Cl2 (Displacement)",
                        "F2 + H2 → 2HF (Hydrogen fluoride)",
                        "2F2 + 2H2O → 4HF + O2 (With water)"
                    ],
                    "reactivity": "Most reactive element, reacts with almost everything",
                    "detectionTest": "Silver nitrate test after dissolution in water",
                    "description": "Most electronegative element, used in toothpaste",
                    "physicalProperties": {
                        "meltingPoint": -219.67,
                        "boilingPoint": -188.11,
                        "density": 0.001696,
                        "state": "gas"
                    }
                },
                {
                    "atomicNumber": 11,
                    "symbol": "Na",
                    "name": "Sodium",
                    "atomicMass": 22.99,
                    "group": 1,
                    "period": 3,
                    "block": "s",
                    "category": "alkali metal",
                    "electrons": [2, 8, 1],
                    "protons": 11,
                    "neutrons": 12,
                    "oxidationStates": [1],
                    "commonReactions": [
                        "2Na + 2H2O → 2NaOH + H2 (Violent reaction with water)",
                        "2Na + Cl2 → 2NaCl (Salt formation)",
                        "4Na + O2 → 2Na2O (Oxidation)"
                    ],
                    "reactivity": "Highly reactive, stored under oil",
                    "detectionTest": "Flame test produces bright yellow/orange color",
                    "description": "Essential electrolyte, main component of table salt",
                    "physicalProperties": {
                        "meltingPoint": 97.79,
                        "boilingPoint": 883,
                        "density": 0.971,
                        "state": "solid"
                    }
                },
                {
                    "atomicNumber": 12,
                    "symbol": "Mg",
                    "name": "Magnesium",
                    "atomicMass": 24.305,
                    "group": 2,
                    "period": 3,
                    "block": "s",
                    "category": "alkaline earth metal",
                    "electrons": [2, 8, 2],
                    "protons": 12,
                    "neutrons": 12,
                    "oxidationStates": [2],
                    "commonReactions": [
                        "Mg + 2H2O → Mg(OH)2 + H2 (With hot water)",
                        "2Mg + O2 → 2MgO (Burns with bright white flame)",
                        "Mg + Cl2 → MgCl2 (Magnesium chloride)"
                    ],
                    "reactivity": "Reactive metal, burns with brilliant white light",
                    "detectionTest": "Flame test produces bright white light",
                    "description": "Lightweight structural metal, essential for chlorophyll",
                    "physicalProperties": {
                        "meltingPoint": 650,
                        "boilingPoint": 1090,
                        "density": 1.738,
                        "state": "solid"
                    }
                },
                {
                    "atomicNumber": 16,
                    "symbol": "S",
                    "name": "Sulfur",
                    "atomicMass": 32.065,
                    "group": 16,
                    "period": 3,
                    "block": "p",
                    "category": "nonmetal",
                    "electrons": [2, 8, 6],
                    "protons": 16,
                    "neutrons": 16,
                    "oxidationStates": [-2, -1, 0, 1, 2, 3, 4, 5, 6],
                    "commonReactions": [
                        "S8 + 8O2 → 8SO2 (Combustion)",
                        "S + H2 → H2S (Hydrogen sulfide)",
                        "S + Fe → FeS (Iron sulfide)"
                    ],
                    "reactivity": "Moderately reactive, forms compounds with most elements",
                    "detectionTest": "Sodium fusion test followed by lead acetate gives black precipitate of PbS",
                    "description": "Yellow crystalline solid, used in sulfuric acid production",
                    "physicalProperties": {
                        "meltingPoint": 115.21,
                        "boilingPoint": 444.6,
                        "density": 2.07,
                        "state": "solid"
                    }
                },
                {
                    "atomicNumber": 17,
                    "symbol": "Cl",
                    "name": "Chlorine",
                    "atomicMass": 35.453,
                    "group": 17,
                    "period": 3,
                    "block": "p",
                    "category": "halogen",
                    "electrons": [2, 8, 7],
                    "protons": 17,
                    "neutrons": 18,
                    "oxidationStates": [-1, 1, 3, 5, 7],
                    "commonReactions": [
                        "Cl2 + 2NaBr → 2NaCl + Br2 (Displacement)",
                        "Cl2 + H2 → 2HCl (Hydrogen chloride)",
                        "3Cl2 + 2Al → 2AlCl3 (Metal chloride)"
                    ],
                    "reactivity": "Very reactive, less than fluorine but more than bromine",
                    "detectionTest": "Silver nitrate test produces white precipitate of AgCl",
                    "description": "Used for water purification and bleaching",
                    "physicalProperties": {
                        "meltingPoint": -101.5,
                        "boilingPoint": -34.04,
                        "density": 0.003214,
                        "state": "gas"
                    }
                },
                {
                    "atomicNumber": 19,
                    "symbol": "K",
                    "name": "Potassium",
                    "atomicMass": 39.098,
                    "group": 1,
                    "period": 4,
                    "block": "s",
                    "category": "alkali metal",
                    "electrons": [2, 8, 8, 1],
                    "protons": 19,
                    "neutrons": 20,
                    "oxidationStates": [1],
                    "commonReactions": [
                        "2K + 2H2O → 2KOH + H2 (Explosive reaction with water)",
                        "2K + Cl2 → 2KCl (Potassium chloride)",
                        "4K + O2 → 2K2O (Oxidation)"
                    ],
                    "reactivity": "More reactive than sodium, catches fire in air",
                    "detectionTest": "Flame test produces lilac/violet color",
                    "description": "Essential for nerve and muscle function",
                    "physicalProperties": {
                        "meltingPoint": 63.5,
                        "boilingPoint": 759,
                        "density": 0.862,
                        "state": "solid"
                    }
                },
                {
                    "atomicNumber": 20,
                    "symbol": "Ca",
                    "name": "Calcium",
                    "atomicMass": 40.078,
                    "group": 2,
                    "period": 4,
                    "block": "s",
                    "category": "alkaline earth metal",
                    "electrons": [2, 8, 8, 2],
                    "protons": 20,
                    "neutrons": 20,
                    "oxidationStates": [2],
                    "commonReactions": [
                        "Ca + 2H2O → Ca(OH)2 + H2 (Reacts vigorously with water)",
                        "Ca + Cl2 → CaCl2 (Calcium chloride)",
                        "2Ca + O2 → 2CaO (Calcium oxide)"
                    ],
                    "reactivity": "Very reactive, reacts readily with water",
                    "detectionTest": "Flame test produces brick-red color",
                    "description": "Essential for bones and teeth, used in construction",
                    "physicalProperties": {
                        "meltingPoint": 842,
                        "boilingPoint": 1484,
                        "density": 1.55,
                        "state": "solid"
                    }
                },
                {
                    "atomicNumber": 26,
                    "symbol": "Fe",
                    "name": "Iron",
                    "atomicMass": 55.845,
                    "group": 8,
                    "period": 4,
                    "block": "d",
                    "category": "transition metal",
                    "electrons": [2, 8, 14, 2],
                    "protons": 26,
                    "neutrons": 30,
                    "oxidationStates": [2, 3],
                    "commonReactions": [
                        "Fe + S → FeS (Iron sulfide)",
                        "2Fe + 3Cl2 → 2FeCl3 (Iron chloride)",
                        "4Fe + 3O2 → 2Fe2O3 (Rust formation)"
                    ],
                    "reactivity": "Moderately reactive, rusts in presence of oxygen and water",
                    "detectionTest": "Potassium thiocyanate produces blood-red color for Fe3+",
                    "description": "Most common element on Earth, essential for blood",
                    "physicalProperties": {
                        "meltingPoint": 1538,
                        "boilingPoint": 2861,
                        "density": 7.874,
                        "state": "solid"
                    }
                },
                {
                    "atomicNumber": 29,
                    "symbol": "Cu",
                    "name": "Copper",
                    "atomicMass": 63.546,
                    "group": 11,
                    "period": 4,
                    "block": "d",
                    "category": "transition metal",
                    "electrons": [2, 8, 18, 1],
                    "protons": 29,
                    "neutrons": 35,
                    "oxidationStates": [1, 2],
                    "commonReactions": [
                        "Cu + 4HNO3 → Cu(NO3)2 + 2NO2 + 2H2O (Nitric acid)",
                        "Cu + 2AgNO3 → Cu(NO3)2 + 2Ag (Displacement)",
                        "Cu + S → CuS (Copper sulfide)"
                    ],
                    "reactivity": "Less reactive than most metals, doesn't react with water",
                    "detectionTest": "Flame test produces green-blue color; ammonia turns deep blue with Cu2+",
                    "description": "Excellent electrical conductor, used in wiring",
                    "physicalProperties": {
                        "meltingPoint": 1085,
                        "boilingPoint": 2562,
                        "density": 8.96,
                        "state": "solid"
                    }
                },
                {
                    "atomicNumber": 35,
                    "symbol": "Br",
                    "name": "Bromine",
                    "atomicMass": 79.904,
                    "group": 17,
                    "period": 4,
                    "block": "p",
                    "category": "halogen",
                    "electrons": [2, 8, 18, 7],
                    "protons": 35,
                    "neutrons": 45,
                    "oxidationStates": [-1, 1, 3, 5, 7],
                    "commonReactions": [
                        "Br2 + 2KI → 2KBr + I2 (Displacement)",
                        "Br2 + H2 → 2HBr (Hydrogen bromide)",
                        "3Br2 + 2Fe → 2FeBr3 (Iron bromide)"
                    ],
                    "reactivity": "Reactive, less than chlorine but more than iodine",
                    "detectionTest": "Silver nitrate test produces cream precipitate of AgBr",
                    "description": "Only liquid non-metal at room temperature",
                    "physicalProperties": {
                        "meltingPoint": -7.2,
                        "boilingPoint": 58.8,
                        "density": 3.122,
                        "state": "liquid"
                    }
                },
                {
                    "atomicNumber": 47,
                    "symbol": "Ag",
                    "name": "Silver",
                    "atomicMass": 107.868,
                    "group": 11,
                    "period": 5,
                    "block": "d",
                    "category": "transition metal",
                    "electrons": [2, 8, 18, 18, 1],
                    "protons": 47,
                    "neutrons": 61,
                    "oxidationStates": [1, 2, 3],
                    "commonReactions": [
                        "2Ag + S → Ag2S (Tarnishing)",
                        "3Ag + 4HNO3 → 3AgNO3 + NO + 2H2O (With nitric acid)",
                        "Ag + NaCl → AgCl + Na (Precipitation)"
                    ],
                    "reactivity": "Noble metal, resistant to oxidation",
                    "detectionTest": "Forms white precipitate with chloride ions (AgCl)",
                    "description": "Precious metal with highest electrical conductivity",
                    "physicalProperties": {
                        "meltingPoint": 961.8,
                        "boilingPoint": 2162,
                        "density": 10.49,
                        "state": "solid"
                    }
                },
                {
                    "atomicNumber": 53,
                    "symbol": "I",
                    "name": "Iodine",
                    "atomicMass": 126.9,
                    "group": 17,
                    "period": 5,
                    "block": "p",
                    "category": "halogen",
                    "electrons": [2, 8, 18, 18, 7],
                    "protons": 53,
                    "neutrons": 74,
                    "oxidationStates": [-1, 1, 3, 5, 7],
                    "commonReactions": [
                        "I2 + Zn → ZnI2 (Metal iodide)",
                        "I2 + H2 → 2HI (Hydrogen iodide)",
                        "I2 + starch → blue complex (Starch test)"
                    ],
                    "reactivity": "Least reactive halogen (excluding astatine)",
                    "detectionTest": "Silver nitrate test produces yellow precipitate of AgI; Starch test turns blue",
                    "description": "Essential for thyroid function, sublimes to purple vapor",
                    "physicalProperties": {
                        "meltingPoint": 113.7,
                        "boilingPoint": 184.3,
                        "density": 4.93,
                        "state": "solid"
                    }
                },
                {
                    "atomicNumber": 79,
                    "symbol": "Au",
                    "name": "Gold",
                    "atomicMass": 196.967,
                    "group": 11,
                    "period": 6,
                    "block": "d",
                    "category": "transition metal",
                    "electrons": [2, 8, 18, 32, 18, 1],
                    "protons": 79,
                    "neutrons": 118,
                    "oxidationStates": [1, 3],
                    "commonReactions": [
                        "Au + 3HNO3 + 4HCl → HAuCl4 + 3NO2 + 3H2O (Aqua regia)",
                        "2Au + 3Cl2 → 2AuCl3 (Gold chloride)",
                        "No reaction with oxygen or water"
                    ],
                    "reactivity": "Extremely unreactive, doesn't tarnish or corrode",
                    "detectionTest": "Purple of Cassius test with tin chloride",
                    "description": "Precious metal, valued for jewelry and currency",
                    "physicalProperties": {
                        "meltingPoint": 1064.18,
                        "boilingPoint": 2970,
                        "density": 19.32,
                        "state": "solid"
                    }
                }
            ],
            "groupTrends": {
                "1": {
                    "name": "Alkali Metals",
                    "reactivityTrend": "Reactivity increases down the group as atomic radius increases",
                    "commonProperties": "Soft, silvery metals with low melting points, very reactive with water",
                    "electronConfiguration": "One electron in outer shell (ns¹)"
                },
                "2": {
                    "name": "Alkaline Earth Metals",
                    "reactivityTrend": "Reactivity increases down the group but less reactive than Group 1",
                    "commonProperties": "Silvery metals, harder than alkali metals, react with water",
                    "electronConfiguration": "Two electrons in outer shell (ns²)"
                },
                "17": {
                    "name": "Halogens",
                    "reactivityTrend": "Reactivity decreases down the group as atomic radius increases",
                    "commonProperties": "Highly reactive non-metals, form salts with metals, exist as diatomic molecules",
                    "electronConfiguration": "Seven electrons in outer shell (ns²np⁵)"
                },
                "18": {
                    "name": "Noble Gases",
                    "reactivityTrend": "Generally unreactive at standard conditions, but reactivity increases down the group",
                    "commonProperties": "Colorless, odorless gases, complete outer electron shells",
                    "electronConfiguration": "Complete octet in outer shell (ns²np⁶)"
                }
            },
            "detectionMethods": {
                "flameTest": {
                    "description": "Flame tests are used to identify certain metals. The sample is put into a flame and the color observed.",
                    "examples": {
                        "Lithium": "Crimson red",
                        "Sodium": "Yellow/orange",
                        "Potassium": "Lilac",
                        "Calcium": "Brick red",
                        "Copper": "Blue-green",
                        "Barium": "Green"
                    }
                },
                "precipitationTest": {
                    "description": "Adding specific reagents to solutions containing ions can form characteristic precipitates.",
                    "examples": {
                        "Chloride": "White precipitate with silver nitrate (AgCl)",
                        "Bromide": "Cream precipitate with silver nitrate (AgBr)",
                        "Iodide": "Yellow precipitate with silver nitrate (AgI)",
                        "Sulfate": "White precipitate with barium chloride (BaSO4)"
                    }
                },
                "organicElementTests": {
                    "description": "Tests to identify elements in organic compounds.",
                    "examples": {
                        "Carbon": "Combustion forms CO2 which turns limewater milky",
                        "Hydrogen": "Combustion forms H2O which condenses on cool surface",
                        "Nitrogen": "Lassaigne's test - sodium fusion followed by iron(II) sulfate gives Prussian blue",
                        "Sulfur": "Sodium fusion test followed by lead acetate gives black precipitate",
                        "Halogens": "Sodium fusion test followed by silver nitrate gives precipitate"
                    }
                }
            },
            "reactionTypes": {
                "combination": {
                    "description": "Two or more substances combine to form a single product.",
                    "formula": "A + B → AB",
                    "examples": [
                        "2H2 + O2 → 2H2O (Hydrogen and oxygen forming water)",
                        "2Na + Cl2 → 2NaCl (Sodium and chlorine forming salt)"
                    ]
                },
                "decomposition": {
                    "description": "A single compound breaks down into multiple simpler substances.",
                    "formula": "AB → A + B",
                    "examples": [
                        "2H2O → 2H2 + O2 (Water decomposing into hydrogen and oxygen)",
                        "2KClO3 → 2KCl + 3O2 (Potassium chlorate decomposing)"
                    ]
                },
                "singleDisplacement": {
                    "description": "An element replaces another element in a compound.",
                    "formula": "A + BC → AC + B",
                    "examples": [
                        "Zn + CuSO4 → ZnSO4 + Cu (Zinc displacing copper)",
                        "Cl2 + 2NaBr → 2NaCl + Br2 (Chlorine displacing bromine)"
                    ]
                },
                "doubleDisplacement": {
                    "description": "The positive and negative ions of two compounds exchange places.",
                    "formula": "AB + CD → AD + CB",
                    "examples": [
                        "AgNO3 + NaCl → AgCl + NaNO3 (Silver nitrate and sodium chloride)",
                        "BaCl2 + Na2SO4 → BaSO4 + 2NaCl (Barium chloride and sodium sulfate)"
                    ]
                },
                "combustion": {
                    "description": "A substance combines with oxygen, releasing energy as heat and light.",
                    "formula": "CxHy + O2 → CO2 + H2O",
                    "examples": [
                        "CH4 + 2O2 → CO2 + 2H2O (Methane combustion)",
                        "C3H8 + 5O2 → 3CO2 + 4H2O (Propane combustion)"
                    ]
                }
            },
            "groups": {
                "1": {
                    "name": "Alkali Metals",
                    "characteristics": "Very reactive metals, one electron in outer shell, react violently with water"
                },
                "17": {
                    "name": "Halogens",
                    "characteristics": "Very reactive non-metals, seven electrons in outer shell, form salts with metals"
                },
                "18": {
                    "name": "Noble Gases",
                    "characteristics": "Chemically inert, complete outer electron shells"
                }
            },
            "periodicTrends": {
                "atomicRadius": "Decreases across period, increases down group",
                "ionizationEnergy": "Increases across period, decreases down group",
                "electronegativity": "Increases across period, decreases down group",
                "metallicCharacter": "Decreases across period, increases down group"
            }
        };

        this.elements = data.elements;
        this.groupTrends = data.groupTrends;
        this.detectionMethods = data.detectionMethods;
        this.reactionTypes = data.reactionTypes;
        this.groups = data.groups;
        this.periodicTrends = data.periodicTrends;
        this.filteredElements = [...this.elements];
    }

    createPeriodicTable() {
        const table = document.getElementById('periodicTable');
        table.innerHTML = '';

        // Create empty cells for proper positioning
        for (let period = 1; period <= 7; period++) {
            for (let group = 1; group <= 18; group++) {
                const element = this.elements.find(el => el.period === period && el.group === group);
                
                if (element) {
                    const cell = this.createElementCell(element);
                    table.appendChild(cell);
                } else {
                    // Create empty cell for proper grid positioning
                    const emptyCell = document.createElement('div');
                    emptyCell.className = 'element-cell empty';
                    emptyCell.style.gridColumn = group;
                    emptyCell.style.gridRow = period;
                    emptyCell.style.visibility = 'hidden';
                    table.appendChild(emptyCell);
                }
            }
        }
    }

    createElementCell(element) {
        const cell = document.createElement('div');
        cell.className = `element-cell ${this.getCategoryClass(element.category)}`;
        cell.style.gridColumn = element.group;
        cell.style.gridRow = element.period;
        cell.dataset.atomicNumber = element.atomicNumber;
        cell.dataset.category = element.category;
        cell.dataset.group = element.group;
        cell.dataset.period = element.period;
        cell.dataset.state = element.physicalProperties.state;

        cell.innerHTML = `
            <div class="element-number">${element.atomicNumber}</div>
            <div class="element-symbol">${element.symbol}</div>
            <div class="element-name">${element.name}</div>
            <div class="element-mass">${element.atomicMass}</div>
        `;

        cell.addEventListener('click', () => this.selectElement(element));
        cell.addEventListener('mouseenter', () => this.showTooltip(element, cell));
        cell.addEventListener('mouseleave', () => this.hideTooltip());

        return cell;
    }

    getCategoryClass(category) {
        // Convert category string to CSS class
        return category.replace(/\s+/g, '-');
    }

    selectElement(element) {
        // Remove previous selection
        document.querySelectorAll('.element-cell.selected').forEach(cell => {
            cell.classList.remove('selected');
        });

        // Add selection to current element
        const cell = document.querySelector(`[data-atomic-number="${element.atomicNumber}"]`);
        if (cell) {
            cell.classList.add('selected');
            cell.classList.add('highlight');
            setTimeout(() => cell.classList.remove('highlight'), 300);
        }

        this.selectedElement = element;
        this.showElementInfo(element);
    }

    showElementInfo(element) {
        const infoContent = document.getElementById('infoContent');
        
        const electronConfig = this.getElectronConfiguration(element.electrons);
        const oxidationStates = element.oxidationStates.join(', ');

        infoContent.innerHTML = `
            <div class="element-info-header ${this.getCategoryClass(element.category)}">
                <div class="element-info-symbol">${element.symbol}</div>
                <div class="element-info-name">${element.name}</div>
                <div class="element-info-atomic">Atomic Number: ${element.atomicNumber}</div>
            </div>

            <div class="info-section">
                <h4>Basic Properties</h4>
                <div class="property-grid">
                    <div class="property-item">
                        <span class="property-label">Atomic Mass</span>
                        <span class="property-value">${element.atomicMass} u</span>
                    </div>
                    <div class="property-item">
                        <span class="property-label">Group</span>
                        <span class="property-value">${element.group}</span>
                    </div>
                    <div class="property-item">
                        <span class="property-label">Period</span>
                        <span class="property-value">${element.period}</span>
                    </div>
                    <div class="property-item">
                        <span class="property-label">Category</span>
                        <span class="property-value">${element.category}</span>
                    </div>
                    <div class="property-item">
                        <span class="property-label">Protons</span>
                        <span class="property-value">${element.protons}</span>
                    </div>
                    <div class="property-item">
                        <span class="property-label">Neutrons</span>
                        <span class="property-value">${element.neutrons}</span>
                    </div>
                </div>
                <div class="property-item" style="margin-top: 8px;">
                    <span class="property-label">Electron Configuration</span>
                    <span class="property-value">${electronConfig}</span>
                </div>
            </div>

            <div class="info-section">
                <h4>Physical Properties</h4>
                <div class="property-grid">
                    <div class="property-item">
                        <span class="property-label">State</span>
                        <span class="property-value">${element.physicalProperties.state}</span>
                    </div>
                    <div class="property-item">
                        <span class="property-label">Density</span>
                        <span class="property-value">${element.physicalProperties.density} g/cm³</span>
                    </div>
                    <div class="property-item">
                        <span class="property-label">Melting Point</span>
                        <span class="property-value">${element.physicalProperties.meltingPoint}°C</span>
                    </div>
                    <div class="property-item">
                        <span class="property-label">Boiling Point</span>
                        <span class="property-value">${element.physicalProperties.boilingPoint}°C</span>
                    </div>
                </div>
            </div>

            <div class="info-section">
                <h4>Chemical Properties</h4>
                <div class="property-item" style="margin-bottom: 8px;">
                    <span class="property-label">Oxidation States</span>
                    <span class="property-value">${oxidationStates}</span>
                </div>
                <div class="property-item">
                    <span class="property-label">Reactivity</span>
                    <span class="property-value">${element.reactivity}</span>
                </div>
            </div>

            <div class="info-section">
                <h4>Common Reactions</h4>
                <ul class="reaction-list">
                    ${element.commonReactions.map(reaction => `<li>${reaction}</li>`).join('')}
                </ul>
            </div>

            <div class="info-section">
                <h4>Detection Test</h4>
                <p>${element.detectionTest}</p>
            </div>

            <div class="info-section">
                <h4>Description</h4>
                <p>${element.description}</p>
            </div>

            ${this.getGroupTrendInfo(element)}
        `;
    }

    getElectronConfiguration(electrons) {
        let config = '';
        const shells = ['1s', '2s', '2p', '3s', '3p', '4s', '3d', '4p', '5s', '4d', '5p', '6s', '4f', '5d', '6p', '7s', '5f', '6d', '7p'];
        const maxElectrons = [2, 2, 6, 2, 6, 2, 10, 6, 2, 10, 6, 2, 14, 10, 6, 2, 14, 10, 6];
        
        let totalElectrons = electrons.reduce((sum, shell) => sum + shell, 0);
        let remaining = totalElectrons;
        
        for (let i = 0; i < shells.length && remaining > 0; i++) {
            const electronsInShell = Math.min(remaining, maxElectrons[i]);
            if (electronsInShell > 0) {
                config += `${shells[i]}${electronsInShell} `;
                remaining -= electronsInShell;
            }
        }
        
        return config.trim();
    }

    getGroupTrendInfo(element) {
        const groupInfo = this.groupTrends[element.group];
        if (!groupInfo) return '';

        return `
            <div class="info-section">
                <h4>Group Trends (${groupInfo.name})</h4>
                <div class="property-item" style="margin-bottom: 8px;">
                    <span class="property-label">Reactivity Trend</span>
                    <span class="property-value">${groupInfo.reactivityTrend}</span>
                </div>
                <div class="property-item" style="margin-bottom: 8px;">
                    <span class="property-label">Common Properties</span>
                    <span class="property-value">${groupInfo.commonProperties}</span>
                </div>
                <div class="property-item">
                    <span class="property-label">Electron Configuration</span>
                    <span class="property-value">${groupInfo.electronConfiguration}</span>
                </div>
            </div>
        `;
    }

    showTooltip(element, cell) {
        // Simple tooltip could be implemented here
        cell.title = `${element.name} (${element.symbol}) - ${element.category}`;
    }

    hideTooltip() {
        // Remove any active tooltips
    }

    setupEventListeners() {
        // Search functionality
        const searchInput = document.getElementById('elementSearch');
        searchInput.addEventListener('input', (e) => this.handleSearch(e.target.value));

        // Filter functionality
        const categoryFilter = document.getElementById('categoryFilter');
        const groupFilter = document.getElementById('groupFilter');
        const periodFilter = document.getElementById('periodFilter');
        const stateFilter = document.getElementById('stateFilter');
        const clearFilters = document.getElementById('clearFilters');

        categoryFilter.addEventListener('change', () => this.applyFilters());
        groupFilter.addEventListener('change', () => this.applyFilters());
        periodFilter.addEventListener('change', () => this.applyFilters());
        stateFilter.addEventListener('change', () => this.applyFilters());
        clearFilters.addEventListener('click', () => this.clearAllFilters());

        // Tab functionality
        const tabButtons = document.querySelectorAll('.tab-button');
        tabButtons.forEach(button => {
            button.addEventListener('click', (e) => this.switchTab(e.target.dataset.tab));
        });

        // Close info panel
        const closeInfo = document.getElementById('closeInfo');
        closeInfo.addEventListener('click', () => this.closeInfoPanel());
    }

    handleSearch(query) {
        query = query.toLowerCase().trim();
        
        if (!query) {
            this.showAllElements();
            return;
        }

        const matchedElements = this.elements.filter(element => 
            element.name.toLowerCase().includes(query) ||
            element.symbol.toLowerCase().includes(query)
        );

        this.highlightElements(matchedElements);
    }

    applyFilters() {
        const categoryFilter = document.getElementById('categoryFilter').value;
        const groupFilter = document.getElementById('groupFilter').value;
        const periodFilter = document.getElementById('periodFilter').value;
        const stateFilter = document.getElementById('stateFilter').value;

        // First reset visibility
        this.showAllElements();

        // Apply each filter if it has a value
        document.querySelectorAll('.element-cell:not(.empty)').forEach(cell => {
            let shouldShow = true;
            
            if (categoryFilter && cell.dataset.category !== categoryFilter) {
                shouldShow = false;
            }
            
            if (shouldShow && groupFilter && cell.dataset.group !== groupFilter) {
                shouldShow = false;
            }
            
            if (shouldShow && periodFilter && cell.dataset.period !== periodFilter) {
                shouldShow = false;
            }
            
            if (shouldShow && stateFilter && cell.dataset.state !== stateFilter) {
                shouldShow = false;
            }
            
            if (!shouldShow) {
                cell.classList.add('hidden');
            } else {
                cell.classList.remove('hidden');
            }
        });
    }

    clearAllFilters() {
        document.getElementById('categoryFilter').value = '';
        document.getElementById('groupFilter').value = '';
        document.getElementById('periodFilter').value = '';
        document.getElementById('stateFilter').value = '';
        document.getElementById('elementSearch').value = '';

        this.showAllElements();
    }

    highlightElements(elements) {
        // Hide all elements first
        document.querySelectorAll('.element-cell:not(.empty)').forEach(cell => {
            cell.classList.add('hidden');
        });

        // Show matched elements
        elements.forEach(element => {
            const cell = document.querySelector(`[data-atomic-number="${element.atomicNumber}"]`);
            if (cell) {
                cell.classList.remove('hidden');
            }
        });
    }

    showAllElements() {
        document.querySelectorAll('.element-cell').forEach(cell => {
            cell.classList.remove('hidden');
        });
    }

    switchTab(tabName) {
        // Update tab buttons
        document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
        document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');

        // Update tab content
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
        document.getElementById(tabName).classList.add('active');
    }

    closeInfoPanel() {
        const infoContent = document.getElementById('infoContent');
        infoContent.innerHTML = '<p>Click on an element to see detailed information here.</p>';
        
        // Remove selection from elements
        document.querySelectorAll('.element-cell.selected').forEach(cell => {
            cell.classList.remove('selected');
        });
        
        this.selectedElement = null;
    }

    populateEducationalContent() {
        // Populate reaction types
        const reactionTypesContainer = document.getElementById('reactionTypes');
        Object.entries(this.reactionTypes).forEach(([key, reaction]) => {
            const div = document.createElement('div');
            div.className = 'reaction-type-item';
            div.innerHTML = `
                <h4>${key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</h4>
                <p>${reaction.description}</p>
                <div class="reaction-formula">${reaction.formula}</div>
                <ul class="example-list">
                    ${reaction.examples.map(example => `<li>${example}</li>`).join('')}
                </ul>
            `;
            reactionTypesContainer.appendChild(div);
        });

        // Populate detection methods
        const detectionContainer = document.getElementById('detectionMethods');
        Object.entries(this.detectionMethods).forEach(([key, method]) => {
            const div = document.createElement('div');
            div.className = 'detection-method-item';
            div.innerHTML = `
                <h4>${key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</h4>
                <p>${method.description}</p>
                <div class="detection-examples">
                    ${Object.entries(method.examples).map(([element, result]) => 
                        `<div class="detection-example"><strong>${element}:</strong> ${result}</div>`
                    ).join('')}
                </div>
            `;
            detectionContainer.appendChild(div);
        });

        // Populate group properties
        const groupContainer = document.getElementById('groupProperties');
        Object.entries(this.groupTrends).forEach(([groupNum, group]) => {
            const div = document.createElement('div');
            div.className = 'group-property-item';
            div.innerHTML = `
                <h4>Group ${groupNum}: ${group.name}</h4>
                <p><strong>Common Properties:</strong> ${group.commonProperties}</p>
                <p><strong>Reactivity Trend:</strong> ${group.reactivityTrend}</p>
                <p><strong>Electron Configuration:</strong> ${group.electronConfiguration}</p>
            `;
            groupContainer.appendChild(div);
        });
    }

    populateFilters() {
        const groupFilter = document.getElementById('groupFilter');
        const uniqueGroups = [...new Set(this.elements.map(el => el.group))].sort((a, b) => a - b);
        
        uniqueGroups.forEach(group => {
            const option = document.createElement('option');
            option.value = group;
            option.textContent = `Group ${group}`;
            groupFilter.appendChild(option);
        });
    }

    showError(message) {
        const infoContent = document.getElementById('infoContent');
        infoContent.innerHTML = `
            <div class="empty-state">
                <h3>Error</h3>
                <p>${message}</p>
            </div>
        `;
    }
}

// Initialize the application when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PeriodicTableApp();
});