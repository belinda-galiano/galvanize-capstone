const knex = require('knex');
const config = require('./knexfile');
const db = knex(config);

const fs = require('fs');
const readline = require('readline');

const columns = {
  FOOD_DES: [
    'NDB_No',
    'FdGrp_Cd',
    'Long_Desc',
    'Shrt_Desc',
    'ComName',
    'ManufacName',
    'Survey',
    'Ref_desc',
    'Refuse',
    'SciName',
    'N_Factor',
    'Pro_Factor',
    'Fat_Factor',
    'CHO_Factor'
  ],
  NUT_DATA: [
    'NDB_No',
    'Nutr_No',
    'Nutr_Val',
    'Num_Data_Pts',
    'Std_Error',
    'Src_Cd',
    'Deriv_Cd',
    'Ref_NDB_No',
    'Add_Nutr_Mark',
    'Num_Studies',
    'Min',
    'Max',
    'DF',
    'Low_EB',
    'Up_EB',
    'Stat_cmt',
    'AddMod_Date',
  ],
  NUTR_DEF: [
    'Nutr_No',
    'Units',
    'Tagname',
    'NutrDesc',
    'Num_Dec',
    'SR_Order'
  ]
};

const files = ['FOOD_DES', 'NUT_DATA', 'NUTR_DEF'];

function readColumns(file, line) {
  const row = {};
  line = line.replace(/~/g, '').split('^')
  for (let i = 0; i < columns[file].length; ++i) {
    row[columns[file][i]] = line[i];
  }

  return row;
}

async function readFoods(file) {
  return new Promise((resolve) => {
    const reader = readline.createInterface({
      input: fs.createReadStream(`/Users/belinda/Downloads/SR-Leg_ASC/${file}.txt`)
    });

    const foods = {};
    reader.on('line', line => {
      const row = readColumns(file, line);

      foods[row.NDB_No] = {
        name: row.Long_Desc,
        nutrients: {}
      };
    }).on('close', () => {
      resolve(foods);
    });
  });
}

async function readNutrients(file) {
  return new Promise((resolve) => {
    const reader = readline.createInterface({
      input: fs.createReadStream(`/Users/belinda/Downloads/SR-Leg_ASC/${file}.txt`)
    });

    const nutrients = {};
    reader.on('line', line => {
      const row = readColumns(file, line);
      nutrients[row.Nutr_No] = row.NutrDesc;
    }).on('close', () => {
      resolve(nutrients);
    });
  });
}

async function readNutData(file, foods, nutrients) {
  return new Promise((resolve) => {
    const reader = readline.createInterface({
      input: fs.createReadStream(`/Users/belinda/Downloads/SR-Leg_ASC/${file}.txt`)
    });

    reader.on('line', line => {
      const row = readColumns(file, line);
      const food = foods[row.NDB_No];
      const nutrient = nutrients[row.Nutr_No];
      food.nutrients[nutrient] = row.Nutr_Val;
    }).on('close', () => {
      resolve();
    });
  });
}


async function load() {
  const nutrients = await readNutrients(files[2]);
  const foods = await readFoods(files[0]);
  await readNutData(files[1], foods, nutrients);
  fs.writeFile('nutrition.json', JSON.stringify(foods), 'utf8', () => null);
}

load();