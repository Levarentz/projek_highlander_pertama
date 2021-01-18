// const baseUrl = 'http://35.198.233.160'
// const baseUrl = 'http://localhost:3000'
// const Products = require('../data/produk.js')
const AllCategory = [
  "Highlander Portable",
  "Highlander",
  "Cummins",
  "Yanmar",
  "Doosan",
  "Deutz",
  "Perkins",
  "Foton",
  "Lovol",
  "Mitsubishi",
];

const AllRange = [
  "less than 100",
  "100-500",
  "501-1000",
  "1001-1500",
  "1501-2000",
  "2001-2500",
  "bigger than 2500",
];

let AllProduct = [
  {
    image: "below100kva.jpg",
    name: "HL CUMMINS 33",
    range: 33,
    description: `<table border="1">
    <tr>
    <th rowspan="2">Standby Power</th><th>KVA</th>
    <td>33</td>
    </tr>
    <tr>
    <th>KW</th><td>26</td>
    </tr>
    <tr>
    <th rowspan="3">Prime Power</th><th>KVA</th>
    <td>30</td>
    </tr>
    <tr>
    <th>KW</th><td>24</td>
    </tr>
    <tr>
    <th>A</th><td>43</td>
    </tr>
    <tr>
    <th colspan="2">Engine Model</th><td>4BT3.9-G2</td>
    </tr>
    <tr>
    <th>Fuel <br>Consumption</th><th>g / kW.h</th><td>6.5</td>
    </tr>
    <tr>
    <th colspan="2">Cylinders</th><td>4 L</td>
    </tr>
    <tr>
    <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
    <td>102</td>
    </tr>
    <tr>
    <th>Stroke (KG)</th><td>120</td>
    </tr>
    </table>`,
    category: "Cummins",
  },
  {
    image: "below100kva.jpg",
    name: "HL CUMMINS 100",
    range: 100,
    description: `<table border="1">
    <tr>
    <th rowspan="2">Standby Power</th><th>KVA</th>
    <td>100</td>
    </tr>
    <tr>
    <th>KW</th><td>80</td>
    </tr>
    <tr>
    <th rowspan="3">Prime Power</th><th>KVA</th>
    <td>90</td>
    </tr>
    <tr>
    <th>KW</th><td>72</td>
    </tr>
    <tr>
    <th>A</th><td>130</td>
    </tr>
    <tr>
    <th colspan="2">Engine Model</th><td>6bt5.9-G1</td>
    </tr>
    <tr>
    <th>Fuel <br>Consumption</th><th>g / kW.h</th><td>18</td>
    </tr>
    <tr>
    <th colspan="2">Cylinders</th><td>6 L</td>
    </tr>
    <tr>
    <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
    <td>102</td>
    </tr>
    <tr>
    <th>Stroke (KG)</th><td>120</td>
    </tr>
    </table>`,
    category: "Cummins",
  },
  {
    image: "below100kva.jpg",
    name: "Highlander Perkins 250",
    range: 250,
    description: `<table border="1">
      <tr>
      <th rowspan="2">Standby Power</th><th>KVA</th>
      <td>250</td>
      </tr>
      <tr>
      <th>KW</th><td>200</td>
      </tr>
      <tr>
      <th rowspan="3">Prime Power</th><th>KVA</th>
      <td>225</td>
      </tr>
      <tr>
      <th>KW</th><td>180</td>
      </tr>
      <tr>
      <th>A</th><td>325</td>
      </tr>
      <tr>
      <th colspan="2">Engine Model</th><td>1306C-E87TAG4</td>
      </tr>
      <tr>
      <th>Fuel <br>Consumption</th><th>g/kW.h</th>
      <td>53</td>
      </tr>
      <tr>
      <th colspan="2">Cylinders</th><td>6L</td>
      </tr>
      <tr>
      <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
      <td>116</td>
      </tr>
      <tr>
      <th>Stroke (KG)</th><td>136</td>
      </tr>
      </table>`,
    category: "Perkins",
  },
  {
    image: "below100kva.jpg",
    name: "Highlander Perkins 1100",
    range: 1100,
    description: `<table border="1">
      <tr>
      <th rowspan="2">Standby Power</th><th>KVA</th>
      <td>1100</td>
      </tr>
      <tr>
      <th>KW</th><td>880</td>
      </tr>
      <tr>
      <th rowspan="3">Prime Power</th><th>KVA</th>
      <td>1000</td>
      </tr>
      <tr>
      <th>KW</th><td>800</td>
      </tr>
      <tr>
      <th>A</th><td>1443</td>
      </tr>
      <tr>
      <th colspan="2">Engine Model</th><td>4006-TAG2A</td>
      </tr>
      <tr>
      <th>Fuel <br>Consumption</th><th>g/kW.h</th>
      <td>221</td>
      </tr>
      <tr>
      <th colspan="2">Cylinders</th><td>8L</td>
      </tr>
      <tr>
      <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
      <td>160</td>
      </tr>
      <tr>
      <th>Stroke (KG)</th><td>190</td>
      </tr>
      </table>`,
    category: "Perkins",
  },
  {
    image: "HL-1200.png",
    name: "Genset Portable HL-1200",
    range: 1,
    description: `
      <p>AC Voltage = 220 Volt</p>
      <p>Starting System = Recoil</p>  
      <p>AC Output Max = 700 Watt</p>
      <p>Fuel Capacity(Ltr) = 4,5 Ltr</p>
      <p>DC Output = 12 V</p>
      <p>Max Capacity = 7 Hours</p>
      <p>Frequency = 50Hz</p>
      <p>Dimensions(mm) = 380x320x330</p>
      <p>Phase = Single</p>
      <p>Net Weight(Kg) = 21 </p>`,
    category: "Highlander Portable",
  },
  {
    image: "HL-1500.png",
    name: "Genset Portable HL-1500",
    range: 1,
    description: ` <p>AC Voltage = 220 Volt</p>
      <p>Starting System = Recoil</p>  
      <p>AC Output Max = 1000 Watt</p>
      <p>Fuel Capacity(Ltr) = 5 Ltr</p>
      <p>DC Output = 12 V</p>
      <p>Max Capacity = 11 Hours</p>
      <p>Frequency = 50Hz</p>
      <p>Dimensions(mm) = 460x380x330</p>
      <p>Phase = Single</p>
      <p>Net Weight(Kg) = 26.4 </p> `,
    category: "Highlander Portable",
  },
  {
    image: "HL-3500LX.png",
    name: "Genset Portable HL 3500",
    range: 1,
    description: ` <p>AC Voltage = 220 Volt</p>
      <p>Starting System = Electric Start</p>  
      <p>AC Output Max = 2500 Watt</p>
      <p>Fuel Capacity(Ltr) = 15 Ltr</p>
      <p>DC Output = 12 V</p>
      <p>Max Capacity = 15 Hours</p>
      <p>Frequency = 50Hz</p>
      <p>Dimensions(mm) = 585x500x460</p>
      <p>Phase = Single</p>
      <p>Net Weight(Kg) = 47 </p> `,
    category: "Highlander Portable",
  },
  {
    image: "HL-4500LX.png",
    name: "Genset Portable HL 4500",
    range: 1,
    description: ` <p>AC Voltage = 220 Volt</p>
      <p>Starting System = Electric Start</p>  
      <p>AC Output Max = 3500 Watt</p>
      <p>Fuel Capacity(Ltr) = 15 Ltr</p>
      <p>DC Output = 12 V /8.3 A</p>
      <p>Max Capacity = 15 Hours</p>
      <p>Frequency = 50Hz</p>
      <p>Dimensions(mm) = 590x460x460</p>
      <p>Phase = Single</p>
      <p>Net Weight(Kg) = 64.7 </p>`,
    category: "Highlander Portable",
  },
  {
    image: "HL-6900LX.png",
    name: "Genset Portable HL 6900",
    range: 1,
    description: `<p>AC Voltage = 220 Volt</p>
      <p>Starting System = Electric Start</p>  
      <p>AC Output Max = 4000 Watt</p>
      <p>Fuel Capacity(Ltr) = 25 Ltr</p>
      <p>DC Output = 12 V /8.3 A</p>
      <p>Max Capacity = 10 Hours</p>
      <p>Frequency = 50Hz</p>
      <p>Dimensions(mm) = 700x575x515</p>
      <p>Phase = Single</p>
      <p>Net Weight(Kg) = 68 </p> `,
    category: "Highlander Portable",
  },
  {
    image: "HL-9000LX.png",
    name: "Genset Portable HL 9000",
    range: 1,
    description: `<p>AC Voltage = 220 Volt</p>
      <p>Starting System = Electric Start</p>  
      <p>AC Output Max = 5500 Watt</p>
      <p>Fuel Capacity(Ltr) = 25 Ltr</p>
      <p>DC Output = 12 V /8.3 A</p>
      <p>Max Capacity = 10 Hours</p>
      <p>Frequency = 50Hz</p>
      <p>Dimensions(mm) = 700x575x515</p>
      <p>Phase = Single</p>
      <p>Net Weight(Kg) = 125 </p> `,
    category: "Highlander Portable",
  },
  {
    image: "HL-9900LX.png",
    name: "Genset Portable HL 9900",
    range: 1,
    description: `<p>AC Voltage = 220 Volt</p>
      <p>Starting System = Electric Start</p>  
      <p>AC Output Max = 6500 Watt</p>
      <p>Fuel Capacity(Ltr) = 25 Ltr</p>
      <p>DC Output = 12 V /8.3 A</p>
      <p>Max Capacity = 10 Hours</p>
      <p>Frequency = 50Hz</p>
      <p>Dimensions(mm) = 700x575x515</p>
      <p>Phase = Single</p>
      <p>Net Weight(Kg) = 210 </p> `,
    category: "Highlander Portable",
  },
  {
    image: "hl-5S-ABU-5000watt.png",
    name: "Portable Genset HL-5",
    range: 1,
    description: `
      <p>Capacity = 5 KVA / 5 KW</p>
      <p>Voltage = 220 Volt</p>
      <p>DC Output = 12 V / 8.3A</p>
      <p>Power Factor = 1</p>
      <p>Power Factor = 1</p>
      <p>Dimension (L x W x H) = 960 x 620 x 720</p>
      <p>Engine Type = 5GFLDE</p>
      <p>Bahan Bakar = Solar</p>
      <p>Engine Speed = 3000 RPM</p>
      <p>Weight = 170</p> `,
    category: "Highlander Portable",
  },
  {
    image: "hl5ss.png",
    name: "Portable Genset HL-5SS",
    range: 1,
    description: `
      <p>Capacity = 6 KVA</p>
      <p>Rated Voltage = 120/240 Volt</p>
      <p>DC Output = 12 V / 8.3A</p>
      <p>Phase = Single</p>
      <p>Power Factor = 1</p>
      <p>Dimension (L x W x H) = 960 x 620 x 720</p>
      <p>Engine Model = CH186F</p>
      <p>Net Weight = 160 Kg</p>
      <p>Rared Frequency = 60 Hz</p>
      <p>Gross Weight = 170</p> `,
    category: "Highlander Portable",
  },
  {
    image: "CSL 1000L.png",
    name: "Portable Genset CSL 1000L",
    range: 1,
    description: `
      <p>AC Voltage = 220 Volt</p>
      <p>Starting System = Manual Start</p>
      <p>AC Output Max = 850 Watt</p>
      <p>Fuel Capacity(Ltr) = LPG Gas</p>
      <p>Engine Type = SD 156 F</p>
      <p>Max Capacity = 12 Hours</p>
      <p>Frequency = 50Hz</p>
      <p>Dimensions(mm) = 475x390x420</p>
      <p>Rpm = 3000</p>
      <p>Net Weight(Kg) = 21</p>
       `,
    category: "Highlander Portable",
  },
  {
    image: "CSL 2000L.png",
    name: "Portable Genset CSL 2000L",
    range: 1,
    description: `
      <p>AC Voltage = 220 Volt</p>
      <p>Starting System = Electric Start</p>
      <p>AC Output Max = 2000 Watt</p>
      <p>Fuel Capacity(Ltr) = LPG Gas</p>
      <p>Engine Type = SD 168 F</p>
      <p>Max Capacity = 12 Hours</p>
      <p>Frequency = 50Hz</p>
      <p>Dimensions(mm) = 620x450x470</p>
      <p>Rpm = 3000</p>
      <p>Net Weight(Kg) = 26</p>`,
    category: "Highlander Portable",
  },
  {
    image: "CSL 3000L.png",
    name: "Portable Genset CSL 3000L",
    range: 1,
    description: `
      <p>AC Voltage = 220 Volt</p>
      <p>Starting System = Electric Start</p>
      <p>AC Output Max = 3200 Watt</p>
      <p>Fuel Capacity(Ltr) = LPG Gas</p>
      <p>Engine Type = SD 177 F</p>
      <p>Max Capacity = 12 Hours</p>
      <p>Frequency = 50Hz</p>
      <p>Dimensions(mm) = 740x560x570</p>
      <p>Rpm = 3000</p>
      <p>Net Weight(Kg) = 47</p>
      `,
    category: "Highlander Portable",
  },
  {
    image: "CSL 5000L.png",
    name: "Portable Genset CSL 5000L",
    range: 5,
    description: `
      <p>AC Voltage = 220 Volt</p>
      <p>Starting System = Electric Start</p>
      <p>AC Output Max = 5200 Watt</p>
      <p>Fuel Capacity(Ltr) = LPG Gas</p>
      <p>Engine Type = SD 190 F</p>
      <p>Max Capacity = 12 Hours</p>
      <p>Frequency = 50Hz</p>
      <p>Dimensions(mm) = 740x540x590</p>
      <p>Rpm = 3000</p>
      <p>Net Weight(Kg) = 74</p>`,
    category: "Highlander Portable",
  },
  {
    image: "below100kva.jpg",
    name: "HL CUMMINS 28",
    range: 28,
    description: `<table border="1">
    <tr>
    <th rowspan="2">Standby Power</th><th>KVA</th>
    <td>28</td>
    </tr>
    <tr>
    <th>KW</th><td>22</td>
    </tr>
    <tr>
    <th rowspan="3">Prime Power</th><th>KVA</th>
    <td>25</td>
    </tr>
    <tr>
    <th>KW</th><td>20</td>
    </tr>
    <tr>
    <th>A</th><td>36</td>
    </tr>
    <tr>
    <th colspan="2">Engine Model</th><td>4B3.9-G1</td>
    </tr>
    <tr>
    <th>Fuel <br>Consumption</th><th>g / kW.h</th><td>6.5</td>
    </tr>
    <tr>
    <th colspan="2">Cylinders</th><td>4 L</td>
    </tr>
    <tr>
    <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
    <td>102</td>
    </tr>
    <tr>
    <th>Stroke (KG)</th><td>120</td>
    </tr>
    </table>`,
    category: "Cummins",
  },
  
  {
    image: "below100kva.jpg",
    name: "HL CUMMINS 41",
    range: 41,
    description: `<table border="1">
    <tr>
    <th rowspan="2">Standby Power</th><th>KVA</th>
    <td>41</td>
    </tr>
    <tr>
    <th>KW</th><td>33</td>
    </tr>
    <tr>
    <th rowspan="3">Prime Power</th><th>KVA</th>
    <td>38</td>
    </tr>
    <tr>
    <th>KW</th><td>30</td>
    </tr>
    <tr>
    <th>A</th><td>54</td>
    </tr>
    <tr>
    <th colspan="2">Engine Model</th><td>4BT3.9-G2</td>
    </tr>
    <tr>
    <th>Fuel <br>Consumption</th><th>g / kW.h</th><td>6.5</td>
    </tr>
    <tr>
    <th colspan="2">Cylinders</th><td>4 L</td>
    </tr>
    <tr>
    <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
    <td>102</td>
    </tr>
    <tr>
    <th>Stroke (KG)</th><td>120</td>
    </tr>
    </table>`,
    category: "Cummins",
  },
  {
    image: "below100kva.jpg",
    name: "HL CUMMINS 50",
    range: 50,
    description: `<table border="1">
    <tr>
    <th rowspan="2">Standby Power</th><th>KVA</th>
    <td>50</td>
    </tr>
    <tr>
    <th>KW</th><td>40</td>
    </tr>
    <tr>
    <th rowspan="3">Prime Power</th><th>KVA</th>
    <td>45</td>
    </tr>
    <tr>
    <th>KW</th><td>36</td>
    </tr>
    <tr>
    <th>A</th><td>65</td>
    </tr>
    <tr>
    <th colspan="2">Engine Model</th><td>4BTA3.9-G2</td>
    </tr>
    <tr>
    <th>Fuel <br>Consumption</th><th>g / kW.h</th><td>9.5</td>
    </tr>
    <tr>
    <th colspan="2">Cylinders</th><td>4 L</td>
    </tr>
    <tr>
    <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
    <td>102</td>
    </tr>
    <tr>
    <th>Stroke (KG)</th><td>120</td>
    </tr>
    </table>`,
    category: "Cummins",
  },
  {
    image: "below100kva.jpg",
    name: "HL CUMMINS 55",
    range: 55,
    description: `<table border="1">
    <tr>
    <th rowspan="2">Standby Power</th><th>KVA</th>
    <td>55</td>
    </tr>
    <tr>
    <th>KW</th><td>44</td>
    </tr>
    <tr>
    <th rowspan="3">Prime Power</th><th>KVA</th>
    <td>50</td>
    </tr>
    <tr>
    <th>KW</th><td>40</td>
    </tr>
    <tr>
    <th>A</th><td>72</td>
    </tr>
    <tr>
    <th colspan="2">Engine Model</th><td>4BTA3.9-G2</td>
    </tr>
    <tr>
    <th>Fuel <br>Consumption</th><th>g / kW.h</th><td>9.5</td>
    </tr>
    <tr>
    <th colspan="2">Cylinders</th><td>4 L</td>
    </tr>
    <tr>
    <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
    <td>102</td>
    </tr>
    <tr>
    <th>Stroke (KG)</th><td>120</td>
    </tr>
    </table>`,
    category: "Cummins",
  },
  {
    image: "below100kva.jpg",
    name: "HL CUMMINS 69",
    range: 69,
    description: `<table border="1">
    <tr>
    <th rowspan="2">Standby Power</th><th>KVA</th>
    <td>69</td>
    </tr>
    <tr>
    <th>KW</th><td>55</td>
    </tr>
    <tr>
    <th rowspan="3">Prime Power</th><th>KVA</th>
    <td>62</td>
    </tr>
    <tr>
    <th>KW</th><td>50</td>
    </tr>
    <tr>
    <th>A</th><td>90</td>
    </tr>
    <tr>
    <th colspan="2">Engine Model</th><td>4BTA3.9-G2</td>
    </tr>
    <tr>
    <th>Fuel <br>Consumption</th><th>g / kW.h</th>
    <td>12.5</td>
    </tr>
    <tr>
    <th colspan="2">Cylinders</th><td>4 L</td>
    </tr>
    <tr>
    <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
    <td>102</td>
    </tr>
    <tr>
    <th>Stroke (KG)</th><td>120</td>
    </tr>
    </table>`,
    category: "Cummins",
  },
  
  {
    image: "below100kva.jpg",
    name: "HL CUMMINS 110",
    range: 110,
    description: `<table border="1">
    <tr>
    <th rowspan="2">Standby Power</th><th>KVA</th>
    <td>110</td>
    </tr>
    <tr>
    <th>KW</th><td>88</td>
    </tr>
    <tr>
    <th rowspan="3">Prime Power</th><th>KVA</th>
    <td>100</td>
    </tr>
    <tr>
    <th>KW</th><td>80</td>
    </tr>
    <tr>
    <th>A</th><td>144</td>
    </tr>
    <tr>
    <th colspan="2">Engine Model</th><td>6BT5.9-G2</td>
    </tr>
    <tr>
    <th>Fuel <br>Consumption</th><th>g / kW.h</th><td>18</td>
    </tr>
    <tr>
    <th colspan="2">Cylinders</th><td>6 L</td>
    </tr>
    <tr>
    <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
    <td>102</td>
    </tr>
    <tr>
    <th>Stroke (KG)</th><td>120</td>
    </tr>
    </table>`,
    category: "Cummins",
  },
  {
    image: "below100kva.jpg",
    name: "HL CUMMINS 124",
    range: 124,
    description: `<table border="1">
    <tr>
    <th rowspan="2">Standby Power</th><th>KVA</th>
    <td>124</td>
    </tr>
    <tr>
    <th>KW</th><td>99</td>
    </tr>
    <tr>
    <th rowspan="3">Prime Power</th><th>KVA</th>
    <td>112</td>
    </tr>
    <tr>
    <th>KW</th><td>90</td>
    </tr>
    <tr>
    <th>A</th><td>162</td>
    </tr>
    <tr>
    <th colspan="2">Engine Model</th><td>6BTA5.9-G2</td>
    </tr>
    <tr>
    <th>Fuel <br>Consumption</th><th>g / kW.h</th><td>24</td>
    </tr>
    <tr>
    <th colspan="2">Cylinders</th><td>6 L</td>
    </tr>
    <tr>
    <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
    <td>102</td>
    </tr>
    <tr>
    <th>Stroke (KG)</th><td>120</td>
    </tr>
    </table>`,
    category: "Cummins",
  },
  {
    image: "below100kva.jpg",
    name: "HL CUMMINS 138",
    range: 138,
    description: `<table border="1">
    <tr>
    <th rowspan="2">Standby Power</th><th>KVA</th>
    <td>138</td>
    </tr>
    <tr>
    <th>KW</th><td>110</td>
    </tr>
    <tr>
    <th rowspan="3">Prime Power</th><th>KVA</th>
    <td>125</td>
    </tr>
    <tr>
    <th>KW</th><td>100</td>
    </tr>
    <tr>
    <th>A</th><td>180</td>
    </tr>
    <tr>
    <th colspan="2">Engine Model</th><td>6BTA5.9-G2</td>
    </tr>
    <tr>
    <th>Fuel <br>Consumption</th><th>g / kW.h</th><td>24</td>
    </tr>
    <tr>
    <th colspan="2">Cylinders</th><td>6 L</td>
    </tr>
    <tr>
    <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
    <td>102</td>
    </tr>
    <tr>
    <th>Stroke (KG)</th><td>120</td>
    </tr>
    </table>`,
    category: "Cummins",
  },
  {
    image: "below100kva.jpg",
    name: "HL CUMMINS 151",
    range: 151,
    description: `<table border="1">
    <tr>
    <th rowspan="2">Standby Power</th><th>KVA</th>
    <td>151</td>
    </tr>
    <tr>
    <th>KW</th><td>121</td>
    </tr>
    <tr>
    <th rowspan="3">Prime Power</th><th>KVA</th>
    <td>138</td>
    </tr>
    <tr>
    <th>KW</th><td>110</td>
    </tr>
    <tr>
    <th>A</th><td>198</td>
    </tr>
    <tr>
    <th colspan="2">Engine Model</th><td>6BTAA5.9-G2</td>
    </tr>
    <tr>
    <th>Fuel <br>Consumption</th><th>g / kW.h</th><td>24</td>
    </tr>
    <tr>
    <th colspan="2">Cylinders</th><td>6 L</td>
    </tr>
    <tr>
    <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
    <td>102</td>
    </tr>
    <tr>
    <th>Stroke (KG)</th><td>120</td>
    </tr>
    </table>`,
    category: "Cummins",
  },
  {
    image: "below100kva.jpg",
    name: "HL CUMMINS 165",
    range: 165,
    description: `<table border="1">
    <tr>
    <th rowspan="2">Standby Power</th><th>KVA</th>
    <td>165</td>
    </tr>
    <tr>
    <th>KW</th><td>132</td>
    </tr>
    <tr>
    <th rowspan="3">Prime Power</th><th>KVA</th>
    <td>150</td>
    </tr>
    <tr>
    <th>KW</th><td>120</td>
    </tr>
    <tr>
    <th>A</th><td>216</td>
    </tr>
    <tr>
    <th colspan="2">Engine Model</th><td>6CTA8.3-G2</td>
    </tr>
    <tr>
    <th>Fuel <br>Consumption</th><th>g / kW.h</th><td>24</td>
    </tr>
    <tr>
    <th colspan="2">Cylinders</th><td>6 L</td>
    </tr>
    <tr>
    <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
    <td>114</td>
    </tr>
    <tr>
    <th>Stroke (KG)</th><td>135</td>
    </tr>
    </table>`,
    category: "Cummins",
  },
  {
    image: "below100kva.jpg",
    name: "HL CUMMINS 206",
    range: 206,
    description: `<table border="1">
    <tr>
    <th rowspan="2">Standby Power</th><th>KVA</th>
    <td>206</td>
    </tr>
    <tr>
    <th>KW</th><td>165</td>
    </tr>
    <tr>
    <th rowspan="3">Prime Power</th><th>KVA</th>
    <td>188</td>
    </tr>
    <tr>
    <th>KW</th><td>150</td>
    </tr>
    <tr>
    <th>A</th><td>271</td>
    </tr>
    <tr>
    <th colspan="2">Engine Model</th><td>6CTA8.3-G2</td>
    </tr>
    <tr>
    <th>Fuel <br>Consumption</th><th>g / kW.h</th><td>40</td>
    </tr>
    <tr>
    <th colspan="2">Cylinders</th><td>6 L</td>
    </tr>
    <tr>
    <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
    <td>114</td>
    </tr>
    <tr>
    <th>Stroke (KG)</th><td>135</td>
    </tr>
    </table>`,
    category: "Cummins",
  },
  {
    image: "below100kva.jpg",
    name: "HL CUMMINS 220",
    range: 220,
    description: `<table border="1">
    <tr>
    <th rowspan="2">Standby Power</th><th>KVA</th>
    <td>220</td>
    </tr>
    <tr>
    <th>KW</th><td>176</td>
    </tr>
    <tr>
    <th rowspan="3">Prime Power</th><th>KVA</th>
    <td>200</td>
    </tr>
    <tr>
    <th>KW</th><td>160</td>
    </tr>
    <tr>
    <th>A</th><td>289</td>
    </tr>
    <tr>
    <th colspan="2">Engine Model</th><td>6CTAA8.3-G2</td>
    </tr>
    <tr>
    <th>Fuel <br>Consumption</th><th>g / kW.h</th><td>45</td>
    </tr>
    <tr>
    <th colspan="2">Cylinders</th><td>6 L</td>
    </tr>
    <tr>
    <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
    <td>114</td>
    </tr>
    <tr>
    <th>Stroke (KG)</th><td>135</td>
    </tr>
    </table>`,
    category: "Cummins",
  },
  {
    image: "below100kva.jpg",
    name: "HL CUMMINS 275",
    range: 275,
    description: `<table border="1">
    <tr>
    <th rowspan="2">Standby Power</th><th>KVA</th>
    <td>275</td>
    </tr>
    <tr>
    <th>KW</th><td>220</td>
    </tr>
    <tr>
    <th rowspan="3">Prime Power</th><th>KVA</th>
    <td>250</td>
    </tr>
    <tr>
    <th>KW</th><td>200</td>
    </tr>
    <tr>
    <th>A</th><td>361</td>
    </tr>
    <tr>
    <th colspan="2">Engine Model</th><td>NT855-GA</td>
    </tr>
    <tr>
    <th>Fuel <br>Consumption</th><th>g / kW.h</th>
    <td>62</td>
    </tr>
    <tr>
    <th colspan="2">Cylinders</th><td>6 L</td>
    </tr>
    <tr>
    <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
    <td>140</td>
    </tr>
    <tr>
    <th>Stroke (KG)</th><td>152</td>
    </tr>
    </table>`,
    category: "Cummins",
  },
  {
    image: "below100kva.jpg",
    name: "HL CUMMINS 297",
    range: 297,
    description: `<table border="1">
    <tr>
    <th rowspan="2">Standby Power</th><th>KVA</th>
    <td>297</td>
    </tr>
    <tr>
    <th>KW</th><td>238</td>
    </tr>
    <tr>
    <th rowspan="3">Prime Power</th><th>KVA</th>
    <td>270</td>
    </tr>
    <tr>
    <th>KW</th><td>216</td>
    </tr>
    <tr>
    <th>A</th><td>390</td>
    </tr>
    <tr>
    <th colspan="2">Engine Model</th><td>NT855-GA</td>
    </tr>
    <tr>
    <th>Fuel <br>Consumption</th><th>g / kW.h</th>
    <td>67</td>
    </tr>
    <tr>
    <th colspan="2">Cylinders</th><td>6 L</td>
    </tr>
    <tr>
    <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
    <td>140</td>
    </tr>
    <tr>
    <th>Stroke (KG)</th><td>152</td>
    </tr>
    </table>`,
    category: "Cummins",
  },
  {
    image: "below100kva.jpg",
    name: "HL CUMMINS 303",
    range: 303,
    description: `<table border="1">
    <tr>
    <th rowspan="2">Standby Power</th><th>KVA</th>
    <td>303</td>
    </tr>
    <tr>
    <th>KW</th><td>242</td>
    </tr>
    <tr>
    <th rowspan="3">Prime Power</th><th>KVA</th>
    <td>275</td>
    </tr>
    <tr>
    <th>KW</th><td>220</td>
    </tr>
    <tr>
    <th>A</th><td>397</td>
    </tr>
    <tr>
    <th colspan="2">Engine Model</th><td>NTA855-G1A</td>
    </tr>
    <tr>
    <th>Fuel <br>Consumption</th><th>g / kW.h</th>
    <td>84</td>
    </tr>
    <tr>
    <th colspan="2">Cylinders</th><td>6 L</td>
    </tr>
    <tr>
    <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
    <td>140</td>
    </tr>
    <tr>
    <th>Stroke (KG)</th><td>152</td>
    </tr>
    </table>`,
    category: "Cummins",
  },
  {
    image: "below100kva.jpg",
    name: "HL CUMMINS 344",
    range: 344,
    description: `<table border="1">
    <tr>
    <th rowspan="2">Standby Power</th><th>KVA</th>
    <td>344</td>
    </tr>
    <tr>
    <th>KW</th><td>275</td>
    </tr>
    <tr>
    <th rowspan="3">Prime Power</th><th>KVA</th>
    <td>313</td>
    </tr>
    <tr>
    <th>KW</th><td>250</td>
    </tr>
    <tr>
    <th>A</th><td>451</td>
    </tr>
    <tr>
    <th colspan="2">Engine Model</th><td>NTA855-G1B</td>
    </tr>
    <tr>
    <th>Fuel <br>Consumption</th><th>g / kW.h</th>
    <td>94</td>
    </tr>
    <tr>
    <th colspan="2">Cylinders</th><td>6 L</td>
    </tr>
    <tr>
    <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
    <td>140</td>
    </tr>
    <tr>
    <th>Stroke (KG)</th><td>152</td>
    </tr>
    </table>`,
    category: "Cummins",
  },
  {
    image: "below100kva.jpg",
    name: "HL CUMMINS 385",
    range: 385,
    description: `<table border="1">
    <tr>
    <th rowspan="2">Standby Power</th><th>KVA</th>
    <td>385</td>
    </tr>
    <tr>
    <th>KW</th><td>308</td>
    </tr>
    <tr>
    <th rowspan="3">Prime Power</th><th>KVA</th>
    <td>350</td>
    </tr>
    <tr>
    <th>KW</th><td>280</td>
    </tr>
    <tr>
    <th>A</th><td>505</td>
    </tr>
    <tr>
    <th colspan="2">Engine Model</th><td>NTA855-G2A</td>
    </tr>
    <tr>
    <th>Fuel <br>Consumption</th><th>g / kW.h</th>
    <td>94</td>
    </tr>
    <tr>
    <th colspan="2">Cylinders</th><td>6 L</td>
    </tr>
    <tr>
    <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
    <td>140</td>
    </tr>
    <tr>
    <th>Stroke (KG)</th><td>152</td>
    </tr>
    </table>`,
    category: "Cummins",
  },
  {
    image: "below100kva.jpg",
    name: "HL CUMMINS 413",
    range: 413,
    description: `<table border="1">
    <tr>
    <th rowspan="2">Standby Power</th><th>KVA</th>
    <td>413</td>
    </tr>
    <tr>
    <th>KW</th><td>330</td>
    </tr>
    <tr>
    <th rowspan="3">Prime Power</th><th>KVA</th>
    <td>375</td>
    </tr>
    <tr>
    <th>KW</th><td>300</td>
    </tr>
    <tr>
    <th>A</th><td>541</td>
    </tr>
    <tr>
    <th colspan="2">Engine Model</th><td>NTA855-G7</td>
    </tr>
    <tr>
    <th>Fuel <br>Consumption</th><th>g / kW.h</th>
    <td>101</td>
    </tr>
    <tr>
    <th colspan="2">Cylinders</th><td>6 L</td>
    </tr>
    <tr>
    <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
    <td>159</td>
    </tr>
    <tr>
    <th>Stroke (KG)</th><td>159</td>
    </tr>
    </table>`,
    category: "Cummins",
  },
  {
    image: "below100kva.jpg",
    name: "HL CUMMINS 454",
    range: 454,
    description: `<table border="1">
    <tr>
    <th rowspan="2">Standby Power</th><th>KVA</th>
    <td>454</td>
    </tr>
    <tr>
    <th>KW</th><td>363</td>
    </tr>
    <tr>
    <th rowspan="3">Prime Power</th><th>KVA</th>
    <td>412</td>
    </tr>
    <tr>
    <th>KW</th><td>330</td>
    </tr>
    <tr>
    <th>A</th><td>595</td>
    </tr>
    <tr>
    <th colspan="2">Engine Model</th><td>NTA855-G7A</td>
    </tr>
    <tr>
    <th>Fuel <br>Consumption</th><th>g / kW.h</th>
    <td>140</td>
    </tr>
    <tr>
    <th colspan="2">Cylinders</th><td>6 L</td>
    </tr>
    <tr>
    <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
    <td>140</td>
    </tr>
    <tr>
    <th>Stroke (KG)</th><td>152</td>
    </tr>
    </table>`,
    category: "Cummins",
  },
  {
    image: "below100kva.jpg",
    name: "HL CUMMINS 495",
    range: 495,
    description: `<table border="1">
    <tr>
    <th rowspan="2">Standby Power</th><th>KVA</th>
    <td>495</td>
    </tr>
    <tr>
    <th>KW</th><td>396</td>
    </tr>
    <tr>
    <th rowspan="3">Prime Power</th><th>KVA</th>
    <td>450</td>
    </tr>
    <tr>
    <th>KW</th><td>360</td>
    </tr>
    <tr>
    <th>A</th><td>649</td>
    </tr>
    <tr>
    <th colspan="2">Engine Model</th><td>KTA19-G3</td>
    </tr>
    <tr>
    <th>Fuel <br>Consumption</th><th>g / kW.h</th>
    <td>135</td>
    </tr>
    <tr>
    <th colspan="2">Cylinders</th><td>6 L</td>
    </tr>
    <tr>
    <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
    <td>159</td>
    </tr>
    <tr>
    <th>Stroke (KG)</th><td>159</td>
    </tr>
    </table>`,
    category: "Cummins",
  },
  {
    image: "below100kva.jpg",
    name: "HL CUMMINS 550",
    range: 550,
    description: `<table border="1">
    <tr>
    <th rowspan="2">Standby Power</th><th>KVA</th>
    <td>550</td>
    </tr>
    <tr>
    <th>KW</th><td>440</td>
    </tr>
    <tr>
    <th rowspan="3">Prime Power</th><th>KVA</th>
    <td>500</td>
    </tr>
    <tr>
    <th>KW</th><td>400</td>
    </tr>
    <tr>
    <th>A</th><td>722</td>
    </tr>
    <tr>
    <th colspan="2">Engine Model</th><td>KTA19-G4</td>
    </tr>
    <tr>
    <th>Fuel <br>Consumption</th><th>g / kW.h</th>
    <td>148</td>
    </tr>
    <tr>
    <th colspan="2">Cylinders</th><td>6 L</td>
    </tr>
    <tr>
    <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
    <td>159</td>
    </tr>
    <tr>
    <th>Stroke (KG)</th><td>159</td>
    </tr>
    </table>`,
    category: "Cummins",
  },
  {
    image: "below100kva.jpg",
    name: "HL CUMMINS 605",
    range: 605,
    description: `<table border="1">
    <tr>
    <th rowspan="2">Standby Power</th><th>KVA</th>
    <td>605</td>
    </tr>
    <tr>
    <th>KW</th><td>484</td>
    </tr>
    <tr>
    <th rowspan="3">Prime Power</th><th>KVA</th>
    <td>550</td>
    </tr>
    <tr>
    <th>KW</th><td>440</td>
    </tr>
    <tr>
    <th>A</th><td>794</td>
    </tr>
    <tr>
    <th colspan="2">Engine Model</th><td>KTA19-G5</td>
    </tr>
    <tr>
    <th>Fuel <br>Consumption</th><th>g / kW.h</th>
    <td>151</td>
    </tr>
    <tr>
    <th colspan="2">Cylinders</th><td>6 L</td>
    </tr>
    <tr>
    <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
    <td>159</td>
    </tr>
    <tr>
    <th>Stroke (KG)</th><td>159</td>
    </tr>
    </table>`,
    category: "Cummins",
  },
  {
    image: "below100kva.jpg",
    name: "HL CUMMINS 619",
    range: 619,
    description: `<table border="1">
    <tr>
    <th rowspan="2">Standby Power</th><th>KVA</th>
    <td>619</td>
    </tr>
    <tr>
    <th>KW</th><td>495</td>
    </tr>
    <tr>
    <th rowspan="3">Prime Power</th><th>KVA</th>
    <td>563</td>
    </tr>
    <tr>
    <th>KW</th><td>450</td>
    </tr>
    <tr>
    <th>A</th><td>812</td>
    </tr>
    <tr>
    <th colspan="2">Engine Model</th><td>KTAA19-G5</td>
    </tr>
    <tr>
    <th>Fuel <br>Consumption</th><th>g / kW.h</th>
    <td>162</td>
    </tr>
    <tr>
    <th colspan="2">Cylinders</th><td>6 L</td>
    </tr>
    <tr>
    <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
    <td>159</td>
    </tr>
    <tr>
    <th>Stroke (KG)</th><td>159</td>
    </tr>
    </table>`,
    category: "Cummins",
  },
  {
    image: "below100kva.jpg",
    name: "HL CUMMINS 660",
    range: 660,
    description: `<table border="1">
    <tr>
    <th rowspan="2">Standby Power</th><th>KVA</th>
    <td>660</td>
    </tr>
    <tr>
    <th>KW</th><td>528</td>
    </tr>
    <tr>
    <th rowspan="3">Prime Power</th><th>KVA</th>
    <td>600</td>
    </tr>
    <tr>
    <th>KW</th><td>480</td>
    </tr>
    <tr>
    <th>A</th><td>866</td>
    </tr>
    <tr>
    <th colspan="2">Engine Model</th><td>KTAA19-G6</td>
    </tr>
    <tr>
    <th>Fuel <br>Consumption</th><th>g / kW.h</th>
    <td>168</td>
    </tr>
    <tr>
    <th colspan="2">Cylinders</th><td>6 L</td>
    </tr>
    <tr>
    <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
    <td>159</td>
    </tr>
    <tr>
    <th>Stroke (KG)</th><td>159</td>
    </tr>
    </table>`,
    category: "Cummins",
  },
  {
    image: "below100kva.jpg",
    name: "HL CUMMINS 688",
    range: 688,
    description: `<table border="1">
    <tr>
    <th rowspan="2">Standby Power</th><th>KVA</th>
    <td>688</td>
    </tr>
    <tr>
    <th>KW</th><td>550</td>
    </tr>
    <tr>
    <th rowspan="3">Prime Power</th><th>KVA</th>
    <td>625</td>
    </tr>
    <tr>
    <th>KW</th><td>500</td>
    </tr>
    <tr>
    <th>A</th><td>902</td>
    </tr>
    <tr>
    <th colspan="2">Engine Model</th><td>KTAA19-G6A</td>
    </tr>
    <tr>
    <th>Fuel <br>Consumption</th><th>g / kW.h</th>
    <td>162</td>
    </tr>
    <tr>
    <th colspan="2">Cylinders</th><td>6 L</td>
    </tr>
    <tr>
    <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
    <td>159</td>
    </tr>
    <tr>
    <th>Stroke (KG)</th><td>159</td>
    </tr>
    </table>`,
    category: "Cummins",
  },
  {
    image: "below100kva.jpg",
    name: "HL CUMMINS 715",
    range: 715,
    description: `<table border="1">
    <tr>
    <th rowspan="2">Standby Power</th><th>KVA</th>
    <td>715</td>
    </tr>
    <tr>
    <th>KW</th><td>572</td>
    </tr>
    <tr>
    <th rowspan="3">Prime Power</th><th>KVA</th>
    <td>650</td>
    </tr>
    <tr>
    <th>KW</th><td>520</td>
    </tr>
    <tr>
    <th>A</th><td>938</td>
    </tr>
    <tr>
    <th colspan="2">Engine Model</th><td>KT38-G</td>
    </tr>
    <tr>
    <th>Fuel <br>Consumption</th><th>g / kW.h</th>
    <td>202</td>
    </tr>
    <tr>
    <th colspan="2">Cylinders</th><td>12 V</td>
    </tr>
    <tr>
    <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
    <td>159</td>
    </tr>
    <tr>
    <th>Stroke (KG)</th><td>159</td>
    </tr>
    </table>`,
    category: "Cummins",
  },
  {
    image: "below100kva.jpg",
    name: "HL CUMMINS 825",
    range: 825,
    description: `<table border="1">
    <tr>
    <th rowspan="2">Standby Power</th><th>KVA</th>
    <td>825</td>
    </tr>
    <tr>
    <th>KW</th><td>660</td>
    </tr>
    <tr>
    <th rowspan="3">Prime Power</th><th>KVA</th>
    <td>750</td>
    </tr>
    <tr>
    <th>KW</th><td>600</td>
    </tr>
    <tr>
    <th>A</th><td>1082</td>
    </tr>
    <tr>
    <th colspan="2">Engine Model</th><td>KTA38-G2</td>
    </tr>
    <tr>
    <th>Fuel <br>Consumption</th><th>g / kW.h</th>
    <td>216</td>
    </tr>
    <tr>
    <th colspan="2">Cylinders</th><td>12 V</td>
    </tr>
    <tr>
    <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
    <td>159</td>
    </tr>
    <tr>
    <th>Stroke (KG)</th><td>159</td>
    </tr>
    </table>`,
    category: "Cummins",
  },
  {
    image: "below100kva.jpg",
    name: "HL CUMMINS 880",
    range: 880,
    description: `<table border="1">
    <tr>
    <th rowspan="2">Standby Power</th><th>KVA</th>
    <td>880</td>
    </tr>
    <tr>
    <th>KW</th><td>704</td>
    </tr>
    <tr>
    <th rowspan="3">Prime Power</th><th>KVA</th>
    <td>800</td>
    </tr>
    <tr>
    <th>KW</th><td>640</td>
    </tr>
    <tr>
    <th>A</th><td>1155</td>
    </tr>
    <tr>
    <th colspan="2">Engine Model</th><td>KTA38-G2A</td>
    </tr>
    <tr>
    <th>Fuel <br>Consumption</th><th>g / kW.h</th>
    <td>243</td>
    </tr>
    <tr>
    <th colspan="2">Cylinders</th><td>12 V</td>
    </tr>
    <tr>
    <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
    <td>159</td>
    </tr>
    <tr>
    <th>Stroke (KG)</th><td>159</td>
    </tr>
    </table>`,
    category: "Cummins",
  },
  {
    image: "below100kva.jpg",
    name: "HL CUMMINS 990",
    range: 990,
    description: `<table border="1">
    <tr>
    <th rowspan="2">Standby Power</th><th>KVA</th>
    <td>990</td>
    </tr>
    <tr>
    <th>KW</th><td>792</td>
    </tr>
    <tr>
    <th rowspan="3">Prime Power</th><th>KVA</th>
    <td>900</td>
    </tr>
    <tr>
    <th>KW</th><td>720</td>
    </tr>
    <tr>
    <th>A</th><td>1299</td>
    </tr>
    <tr>
    <th colspan="2">Engine Model</th><td>KTA38-G2</td>
    </tr>
    <tr>
    <th>Fuel <br>Consumption</th><th>g / kW.h</th>
    <td>280</td>
    </tr>
    <tr>
    <th colspan="2">Cylinders</th><td>12 V</td>
    </tr>
    <tr>
    <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
    <td>159</td>
    </tr>
    <tr>
    <th>Stroke (KG)</th><td>159</td>
    </tr>
    </table>`,
    category: "Cummins",
  },
  {
    image: "below100kva.jpg",
    name: "HL CUMMINS 1100",
    range: 1100,
    description: `<table border="1">
    <tr>
    <th rowspan="2">Standby Power</th><th>KVA</th>
    <td>1100</td>
    </tr>
    <tr>
    <th>KW</th><td>880</td>
    </tr>
    <tr>
    <th rowspan="3">Prime Power</th><th>KVA</th>
    <td>1000</td>
    </tr>
    <tr>
    <th>KW</th><td>800</td>
    </tr>
    <tr>
    <th>A</th><td>1443</td>
    </tr>
    <tr>
    <th colspan="2">Engine Model</th><td>KTA38-G5</td>
    </tr>
    <tr>
    <th>Fuel <br>Consumption</th><th>g / kW.h</th>
    <td>284</td>
    </tr>
    <tr>
    <th colspan="2">Cylinders</th><td>12 V</td>
    </tr>
    <tr>
    <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
    <td>159</td>
    </tr>
    <tr>
    <th>Stroke (KG)</th><td>159</td>
    </tr>
    </table>`,
    category: "Cummins",
  },
  {
    image: "below100kva.jpg",
    name: "Highlander Yanmar 8 ",
    range: 8,
    description: `<table border="1">
    <tr>
    <th rowspan="2">Standby Power</th><th>KVA</th>
    <td>8</td>
    </tr>
    <tr>
    <th>KW</th><td>6.4</td>
    </tr>
    <tr>
    <th rowspan="3">Prime Power</th><th>KVA</th>
    <td></td>
    </tr>
    <tr>
    <th>KW</th><td></td>
    </tr>
    <tr>
    <th>A</th><td></td>
    </tr>
    <tr>
    <th colspan="2">Engine Model</th><td>3TNE74-G1</td>
    </tr>
    <tr>
    <th>Fuel <br>Consumption</th><th>L/H</th>
    <td>2.50</td>
    </tr>
    <tr>
    <th colspan="2">Cylinders</th><td>3</td>
    </tr>
    <tr>
    <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
    <td>74</td>
    </tr>
    <tr>
    <th>Stroke (KG)</th><td>78</td>
    </tr>
    </table>`,
    category: "Yanmar",
  },
  {
    image: "below100kva.jpg",
    name: "Highlander Yanmar 12 ",
    range: 12,
    description: `<table border="1">
    <tr>
    <th rowspan="2">Standby Power</th><th>KVA</th>
    <td>12</td>
    </tr>
    <tr>
    <th>KW</th><td>9.6</td>
    </tr>
    <tr>
    <th rowspan="3">Prime Power</th><th>KVA</th>
    <td></td>
    </tr>
    <tr>
    <th>KW</th><td></td>
    </tr>
    <tr>
    <th>A</th><td></td>
    </tr>
    <tr>
    <th colspan="2">Engine Model</th><td>3TNE84-G1</td>
    </tr>
    <tr>
    <th>Fuel <br>Consumption</th><th>L/H</th>
    <td>3.2</td>
    </tr>
    <tr>
    <th colspan="2">Cylinders</th><td>3</td>
    </tr>
    <tr>
    <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
    <td>84</td>
    </tr>
    <tr>
    <th>Stroke (KG)</th><td>90</td>
    </tr>
    </table>`,
    category: "Yanmar",
  },
  {
    image: "below100kva.jpg",
    name: "Highlander Yanmar 16 ",
    range: 16,
    description: `<table border="1">
    <tr>
    <th rowspan="2">Standby Power</th><th>KVA</th>
    <td>16</td>
    </tr>
    <tr>
    <th>KW</th><td>12.8</td>
    </tr>
    <tr>
    <th rowspan="3">Prime Power</th><th>KVA</th>
    <td></td>
    </tr>
    <tr>
    <th>KW</th><td></td>
    </tr>
    <tr>
    <th>A</th><td></td>
    </tr>
    <tr>
    <th colspan="2">Engine Model</th><td>4TNE84-G1</td>
    </tr>
    <tr>
    <th>Fuel <br>Consumption</th><th>L/H</th>
    <td>3.9</td>
    </tr>
    <tr>
    <th colspan="2">Cylinders</th><td>4</td>
    </tr>
    <tr>
    <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
    <td>84</td>
    </tr>
    <tr>
    <th>Stroke (KG)</th><td>90</td>
    </tr>
    </table>`,
    category: "Yanmar",
  },
  {
    image: "below100kva.jpg",
    name: "Highlander Yanmar 22.5 ",
    range: 22.5,
    description: `<table border="1">
    <tr>
    <th rowspan="2">Standby Power</th><th>KVA</th>
    <td>22.5</td>
    </tr>
    <tr>
    <th>KW</th><td>18</td>
    </tr>
    <tr>
    <th rowspan="3">Prime Power</th><th>KVA</th>
    <td></td>
    </tr>
    <tr>
    <th>KW</th><td></td>
    </tr>
    <tr>
    <th>A</th><td></td>
    </tr>
    <tr>
    <th colspan="2">Engine Model</th><td>4TNE84-TG</td>
    </tr>
    <tr>
    <th>Fuel <br>Consumption</th><th>L/H</th>
    <td>5.4</td>
    </tr>
    <tr>
    <th colspan="2">Cylinders</th><td>4</td>
    </tr>
    <tr>
    <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
    <td>84</td>
    </tr>
    <tr>
    <th>Stroke (KG)</th><td>90</td>
    </tr>
    </table>`,
    category: "Yanmar",
  },
  {
    image: "below100kva.jpg",
    name: "Highlander Yanmar 35 ",
    range: 35,
    description: `<table border="1">
    <tr>
    <th rowspan="2">Standby Power</th><th>KVA</th>
    <td>35</td>
    </tr>
    <tr>
    <th>KW</th><td>28</td>
    </tr>
    <tr>
    <th rowspan="3">Prime Power</th><th>KVA</th>
    <td></td>
    </tr>
    <tr>
    <th>KW</th><td></td>
    </tr>
    <tr>
    <th>A</th><td></td>
    </tr>
    <tr>
    <th colspan="2">Engine Model</th><td>4TNE98-G1</td>
    </tr>
    <tr>
    <th>Fuel <br>Consumption</th><th>L/H</th>
    <td>7.56</td>
    </tr>
    <tr>
    <th colspan="2">Cylinders</th><td>4</td>
    </tr>
    <tr>
    <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
    <td>98</td>
    </tr>
    <tr>
    <th>Stroke (KG)</th><td>110</td>
    </tr>
    </table>`,
    category: "Yanmar",
  },
  {
    image: "below100kva.jpg",
    name: "Highlander Yanmar 60 ",
    range: 60,
    description: `<table border="1">
    <tr>
    <th rowspan="2">Standby Power</th><th>KVA</th>
    <td>60</td>
    </tr>
    <tr>
    <th>KW</th><td>48</td>
    </tr>
    <tr>
    <th rowspan="3">Prime Power</th><th>KVA</th>
    <td></td>
    </tr>
    <tr>
    <th>KW</th><td></td>
    </tr>
    <tr>
    <th>A</th><td></td>
    </tr>
    <tr>
    <th colspan="2">Engine Model</th><td>4TNE106-TG</td>
    </tr>
    <tr>
    <th>Fuel <br>Consumption</th><th>L/H</th>
    <td>12.5</td>
    </tr>
    <tr>
    <th colspan="2">Cylinders</th><td>4</td>
    </tr>
    <tr>
    <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
    <td>106</td>
    </tr>
    <tr>
    <th>Stroke (KG)</th><td>125</td>
    </tr>
    </table>`,
    category: "Yanmar",
  },
  {
    image: "below100kva.jpg",
    name: "HL DOS 100",
    range: 100,
    description: `<table border="1">
    <tr>
    <th rowspan="2">Standby Power</th><th>KVA</th>
    <td>100</td>
    </tr>
    <tr>
    <th>KW</th><td>80</td>
    </tr>
    <tr>
    <th rowspan="3">Prime Power</th><th>KVA</th>
    <td>90</td>
    </tr>
    <tr>
    <th>KW</th><td>72</td>
    </tr>
    <tr>
    <th>A</th><td>130</td>
    </tr>
    <tr>
    <th colspan="2">Engine Model</th><td>D1146</td>
    </tr>
    <tr>
    <th>Fuel <br>Consumption</th><th>g/kW.h</th>
    <td></td>
    </tr>
    <tr>
    <th colspan="2">Cylinders</th><td>6L</td>
    </tr>
    <tr>
    <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
    <td>111</td>
    </tr>
    <tr>
    <th>Stroke (KG)</th><td>139</td>
    </tr>
    </table>`,
    category: "Doosan",
  },
  {
    image: "below100kva.jpg",
    name: "HL DOS 138",
    range: 138,
    description: `<table border="1">
    <tr>
    <th rowspan="2">Standby Power</th><th>KVA</th>
    <td>138</td>
    </tr>
    <tr>
    <th>KW</th><td>110</td>
    </tr>
    <tr>
    <th rowspan="3">Prime Power</th><th>KVA</th>
    <td>125</td>
    </tr>
    <tr>
    <th>KW</th><td>100</td>
    </tr>
    <tr>
    <th>A</th><td>180</td>
    </tr>
    <tr>
    <th colspan="2">Engine Model</th><td>D1146T</td>
    </tr>
    <tr>
    <th>Fuel <br>Consumption</th><th>g/kW.h</th>
    <td></td>
    </tr>
    <tr>
    <th colspan="2">Cylinders</th><td>6L</td>
    </tr>
    <tr>
    <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
    <td>111</td>
    </tr>
    <tr>
    <th>Stroke (KG)</th><td>139</td>
    </tr>
    </table>`,
    category: "Doosan",
  },
  {
    image: "below100kva.jpg",
    name: "HL DOS 188",
    range: 188,
    description: `<table border="1">
    <tr>
    <th rowspan="2">Standby Power</th><th>KVA</th>
    <td>188</td>
    </tr>
    <tr>
    <th>KW</th><td>150</td>
    </tr>
    <tr>
    <th rowspan="3">Prime Power</th><th>KVA</th>
    <td>170</td>
    </tr>
    <tr>
    <th>KW</th><td>136</td>
    </tr>
    <tr>
    <th>A</th><td>245</td>
    </tr>
    <tr>
    <th colspan="2">Engine Model</th><td>PO86TI-1</td>
    </tr>
    <tr>
    <th>Fuel <br>Consumption</th><th>g/kW.h</th>
    <td></td>
    </tr>
    <tr>
    <th colspan="2">Cylinders</th><td>6L</td>
    </tr>
    <tr>
    <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
    <td>111</td>
    </tr>
    <tr>
    <th>Stroke (KG)</th><td>139</td>
    </tr>
    </table>`,
    category: "Doosan",
  },
  {
    image: "below100kva.jpg",
    name: "HL DOS 220",
    range: 220,
    description: `<table border="1">
    <tr>
    <th rowspan="2">Standby Power</th><th>KVA</th>
    <td>220</td>
    </tr>
    <tr>
    <th>KW</th><td>176</td>
    </tr>
    <tr>
    <th rowspan="3">Prime Power</th><th>KVA</th>
    <td>200</td>
    </tr>
    <tr>
    <th>KW</th><td>160</td>
    </tr>
    <tr>
    <th>A</th><td>289</td>
    </tr>
    <tr>
    <th colspan="2">Engine Model</th><td>PO86TI</td>
    </tr>
    <tr>
    <th>Fuel <br>Consumption</th><th>g/kW.h</th>
    <td></td>
    </tr>
    <tr>
    <th colspan="2">Cylinders</th><td>6L</td>
    </tr>
    <tr>
    <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
    <td>111</td>
    </tr>
    <tr>
    <th>Stroke (KG)</th><td>139</td>
    </tr>
    </table>`,
    category: "Doosan",
  },
  {
    image: "below100kva.jpg",
    name: "HL DOS 275",
    range: 275,
    description: `<table border="1">
    <tr>
    <th rowspan="2">Standby Power</th><th>KVA</th>
    <td>275</td>
    </tr>
    <tr>
    <th>KW</th><td>220</td>
    </tr>
    <tr>
    <th rowspan="3">Prime Power</th><th>KVA</th>
    <td>250</td>
    </tr>
    <tr>
    <th>KW</th><td>200</td>
    </tr>
    <tr>
    <th>A</th><td>361</td>
    </tr>
    <tr>
    <th colspan="2">Engine Model</th><td>P126TI</td>
    </tr>
    <tr>
    <th>Fuel <br>Consumption</th><th>g/kW.h</th>
    <td></td>
    </tr>
    <tr>
    <th colspan="2">Cylinders</th><td>6L</td>
    </tr>
    <tr>
    <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
    <td>123</td>
    </tr>
    <tr>
    <th>Stroke (KG)</th><td>155</td>
    </tr>
    </table>`,
    category: "Doosan",
  },
  {
    image: "below100kva.jpg",
    name: "HL DOS 303",
    range: 303,
    description: `<table border="1">
    <tr>
    <th rowspan="2">Standby Power</th><th>KVA</th>
    <td>303</td>
    </tr>
    <tr>
    <th>KW</th><td>242</td>
    </tr>
    <tr>
    <th rowspan="3">Prime Power</th><th>KVA</th>
    <td>275</td>
    </tr>
    <tr>
    <th>KW</th><td>220</td>
    </tr>
    <tr>
    <th>A</th><td>397</td>
    </tr>
    <tr>
    <th colspan="2">Engine Model</th><td>P126TI</td>
    </tr>
    <tr>
    <th>Fuel <br>Consumption</th><th>g/kW.h</th>
    <td></td>
    </tr>
    <tr>
    <th colspan="2">Cylinders</th><td>6L</td>
    </tr>
    <tr>
    <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
    <td>123</td>
    </tr>
    <tr>
    <th>Stroke (KG)</th><td>155</td>
    </tr>
    </table>`,
    category: "Doosan",
  },
  {
    image: "below100kva.jpg",
    name: "HL DOS 344",
    range: 344,
    description: `<table border="1">
    <tr>
    <th rowspan="2">Standby Power</th><th>KVA</th>
    <td>344</td>
    </tr>
    <tr>
    <th>KW</th><td>275</td>
    </tr>
    <tr>
    <th rowspan="3">Prime Power</th><th>KVA</th>
    <td>313</td>
    </tr>
    <tr>
    <th>KW</th><td>250</td>
    </tr>
    <tr>
    <th>A</th><td>451</td>
    </tr>
    <tr>
    <th colspan="2">Engine Model</th><td>P126TI-II</td>
    </tr>
    <tr>
    <th>Fuel <br>Consumption</th><th>g/kW.h</th>
    <td></td>
    </tr>
    <tr>
    <th colspan="2">Cylinders</th><td>6L</td>
    </tr>
    <tr>
    <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
    <td>123</td>
    </tr>
    <tr>
    <th>Stroke (KG)</th><td>155</td>
    </tr>
    </table>`,
    category: "Doosan",
  },
  {
    image: "below100kva.jpg",
    name: "HL DOS 413",
    range: 413,
    description: `<table border="1">
    <tr>
    <th rowspan="2">Standby Power</th><th>KVA</th>
    <td>413</td>
    </tr>
    <tr>
    <th>KW</th><td>330</td>
    </tr>
    <tr>
    <th rowspan="3">Prime Power</th><th>KVA</th>
    <td>375</td>
    </tr>
    <tr>
    <th>KW</th><td>300</td>
    </tr>
    <tr>
    <th>A</th><td>541</td>
    </tr>
    <tr>
    <th colspan="2">Engine Model</th><td>P158LE-1</td>
    </tr>
    <tr>
    <th>Fuel <br>Consumption</th><th>g/kW.h</th>
    <td></td>
    </tr>
    <tr>
    <th colspan="2">Cylinders</th><td>8V</td>
    </tr>
    <tr>
    <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
    <td>128</td>
    </tr>
    <tr>
    <th>Stroke (KG)</th><td>142</td>
    </tr>
    </table>`,
    category: "Doosan",
  },
  {
    image: "below100kva.jpg",
    name: "HL DOS 450",
    range: 450,
    description: `<table border="1">
    <tr>
    <th rowspan="2">Standby Power</th><th>KVA</th>
    <td>450</td>
    </tr>
    <tr>
    <th>KW</th><td>360</td>
    </tr>
    <tr>
    <th rowspan="3">Prime Power</th><th>KVA</th>
    <td>413</td>
    </tr>
    <tr>
    <th>KW</th><td>330</td>
    </tr>
    <tr>
    <th>A</th><td>595</td>
    </tr>
    <tr>
    <th colspan="2">Engine Model</th><td>P158LE</td>
    </tr>
    <tr>
    <th>Fuel <br>Consumption</th><th>g/kW.h</th>
    <td></td>
    </tr>
    <tr>
    <th colspan="2">Cylinders</th><td>8V</td>
    </tr>
    <tr>
    <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
    <td>128</td>
    </tr>
    <tr>
    <th>Stroke (KG)</th><td>142</td>
    </tr>
    </table>`,
    category: "Doosan",
  },
  {
    image: "below100kva.jpg",
    name: "HL DOS 495",
    range: 495,
    description: `<table border="1">
    <tr>
    <th rowspan="2">Standby Power</th><th>KVA</th>
    <td>495</td>
    </tr>
    <tr>
    <th>KW</th><td>396</td>
    </tr>
    <tr>
    <th rowspan="3">Prime Power</th><th>KVA</th>
    <td>450</td>
    </tr>
    <tr>
    <th>KW</th><td>360</td>
    </tr>
    <tr>
    <th>A</th><td>649</td>
    </tr>
    <tr>
    <th colspan="2">Engine Model</th><td>P158LE-S</td>
    </tr>
    <tr>
    <th>Fuel <br>Consumption</th><th>g/kW.h</th>
    <td></td>
    </tr>
    <tr>
    <th colspan="2">Cylinders</th><td>8V</td>
    </tr>
    <tr>
    <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
    <td>128</td>
    </tr>
    <tr>
    <th>Stroke (KG)</th><td>142</td>
    </tr>
    </table>`,
    category: "Doosan",
  },
  {
    image: "below100kva.jpg",
    name: "HL DOS 550",
    range: 550,
    description: `<table border="1">
    <tr>
    <th rowspan="2">Standby Power</th><th>KVA</th>
    <td>550</td>
    </tr>
    <tr>
    <th>KW</th><td>440</td>
    </tr>
    <tr>
    <th rowspan="3">Prime Power</th><th>KVA</th>
    <td>500</td>
    </tr>
    <tr>
    <th>KW</th><td>400</td>
    </tr>
    <tr>
    <th>A</th><td>722</td>
    </tr>
    <tr>
    <th colspan="2">Engine Model</th><td>P180LE</td>
    </tr>
    <tr>
    <th>Fuel <br>Consumption</th><th>g/kW.h</th>
    <td></td>
    </tr>
    <tr>
    <th colspan="2">Cylinders</th><td>10V</td>
    </tr>
    <tr>
    <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
    <td>128</td>
    </tr>
    <tr>
    <th>Stroke (KG)</th><td>142</td>
    </tr>
    </table>`,
    category: "Doosan",
  },
  {
    image: "below100kva.jpg",
    name: "HL DOS 625",
    range: 625,
    description: `<table border="1">
    <tr>
    <th rowspan="2">Standby Power</th><th>KVA</th>
    <td>625</td>
    </tr>
    <tr>
    <th>KW</th><td>500</td>
    </tr>
    <tr>
    <th rowspan="3">Prime Power</th><th>KVA</th>
    <td>563</td>
    </tr>
    <tr>
    <th>KW</th><td>450</td>
    </tr>
    <tr>
    <th>A</th><td>812</td>
    </tr>
    <tr>
    <th colspan="2">Engine Model</th><td>P222LE-1</td>
    </tr>
    <tr>
    <th>Fuel <br>Consumption</th><th>g/kW.h</th>
    <td></td>
    </tr>
    <tr>
    <th colspan="2">Cylinders</th><td>10V</td>
    </tr>
    <tr>
    <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
    <td>128</td>
    </tr>
    <tr>
    <th>Stroke (KG)</th><td>142</td>
    </tr>
    </table>`,
    category: "Doosan",
  },
  {
    image: "below100kva.jpg",
    name: "HL DOS 688",
    range: 688,
    description: `<table border="1">
    <tr>
    <th rowspan="2">Standby Power</th><th>KVA</th>
    <td>688</td>
    </tr>
    <tr>
    <th>KW</th><td>550</td>
    </tr>
    <tr>
    <th rowspan="3">Prime Power</th><th>KVA</th>
    <td>625</td>
    </tr>
    <tr>
    <th>KW</th><td>500</td>
    </tr>
    <tr>
    <th>A</th><td>902</td>
    </tr>
    <tr>
    <th colspan="2">Engine Model</th><td>P222LE</td>
    </tr>
    <tr>
    <th>Fuel <br>Consumption</th><th>g/kW.h</th>
    <td></td>
    </tr>
    <tr>
    <th colspan="2">Cylinders</th><td>10V</td>
    </tr>
    <tr>
    <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
    <td>128</td>
    </tr>
    <tr>
    <th>Stroke (KG)</th><td>142</td>
    </tr>
    </table>`,
    category: "Doosan",
  },
  {
    image: "below100kva.jpg",
    name: "HL DOS 756",
    range: 756,
    description: `<table border="1">
    <tr>
    <th rowspan="2">Standby Power</th><th>KVA</th>
    <td>756</td>
    </tr>
    <tr>
    <th>KW</th><td>605</td>
    </tr>
    <tr>
    <th rowspan="3">Prime Power</th><th>KVA</th>
    <td>688</td>
    </tr>
    <tr>
    <th>KW</th><td>550</td>
    </tr>
    <tr>
    <th>A</th><td>902</td>
    </tr>
    <tr>
    <th colspan="2">Engine Model</th><td>P222LE-II</td>
    </tr>
    <tr>
    <th>Fuel <br>Consumption</th><th>g/kW.h</th>
    <td></td>
    </tr>
    <tr>
    <th colspan="2">Cylinders</th><td>10V</td>
    </tr>
    <tr>
    <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
    <td>128</td>
    </tr>
    <tr>
    <th>Stroke (KG)</th><td>142</td>
    </tr>
    </table>`,
    category: "Doosan",
  },
  {
    image: "below100kva.jpg",
    name: "Highlander Deutz 33",
    range: 33,
    description: `<table border="1">
      <tr>
      <th rowspan="2">Standby Power</th><th>KVA</th>
      <td>33</td>
      </tr>
      <tr>
      <th>KW</th><td>26</td>
      </tr>
      <tr>
      <th rowspan="3">Prime Power</th><th>KVA</th>
      <td>30</td>
      </tr>
      <tr>
      <th>KW</th><td>24</td>
      </tr>
      <tr>
      <th>A</th><td>43</td>
      </tr>
      <tr>
      <th colspan="2">Engine Model</th><td>D226B-3D</td>
      </tr>
      <tr>
      <th>Fuel <br>Consumption</th><th>g/kW.h</th>
      <td></td>
      </tr>
      <tr>
      <th colspan="2">Cylinders</th><td>3L</td>
      </tr>
      <tr>
      <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
      <td>105</td>
      </tr>
      <tr>
      <th>Stroke (KG)</th><td>120</td>
      </tr>
      </table>`,
    category: "Deutz",
  },
  {
    image: "below100kva.jpg",
    name: "Highlander Deutz 41",
    range: 41,
    description: `<table border="1">
      <tr>
      <th rowspan="2">Standby Power</th><th>KVA</th>
      <td>41</td>
      </tr>
      <tr>
      <th>KW</th><td>33</td>
      </tr>
      <tr>
      <th rowspan="3">Prime Power</th><th>KVA</th>
      <td>38</td>
      </tr>
      <tr>
      <th>KW</th><td>30</td>
      </tr>
      <tr>
      <th>A</th><td>54</td>
      </tr>
      <tr>
      <th colspan="2">Engine Model</th><td>TD226B-3D</td>
      </tr>
      <tr>
      <th>Fuel <br>Consumption</th><th>g/kW.h</th>
      <td></td>
      </tr>
      <tr>
      <th colspan="2">Cylinders</th><td>3L</td>
      </tr>
      <tr>
      <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
      <td>105</td>
      </tr>
      <tr>
      <th>Stroke (KG)</th><td>120</td>
      </tr>
      </table>`,
    category: "Deutz",
  },
  {
    image: "below100kva.jpg",
    name: "Highlander Deutz 50",
    range: 50,
    description: `<table border="1">
      <tr>
      <th rowspan="2">Standby Power</th><th>KVA</th>
      <td>50</td>
      </tr>
      <tr>
      <th>KW</th><td>40</td>
      </tr>
      <tr>
      <th rowspan="3">Prime Power</th><th>KVA</th>
      <td>45</td>
      </tr>
      <tr>
      <th>KW</th><td>36</td>
      </tr>
      <tr>
      <th>A</th><td>65</td>
      </tr>
      <tr>
      <th colspan="2">Engine Model</th><td>TD226B-3D</td>
      </tr>
      <tr>
      <th>Fuel <br>Consumption</th><th>g/kW.h</th>
      <td></td>
      </tr>
      <tr>
      <th colspan="2">Cylinders</th><td>3L</td>
      </tr>
      <tr>
      <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
      <td>105</td>
      </tr>
      <tr>
      <th>Stroke (KG)</th><td>120</td>
      </tr>
      </table>`,
    category: "Deutz",
  },
  {
    image: "below100kva.jpg",
    name: "Highlander Deutz 55",
    range: 55,
    description: `<table border="1">
      <tr>
      <th rowspan="2">Standby Power</th><th>KVA</th>
      <td>55</td>
      </tr>
      <tr>
      <th>KW</th><td>55</td>
      </tr>
      <tr>
      <th rowspan="3">Prime Power</th><th>KVA</th>
      <td>50</td>
      </tr>
      <tr>
      <th>KW</th><td>40</td>
      </tr>
      <tr>
      <th>A</th><td>72</td>
      </tr>
      <tr>
      <th colspan="2">Engine Model</th><td>TD226B-3D</td>
      </tr>
      <tr>
      <th>Fuel <br>Consumption</th><th>g/kW.h</th>
      <td></td>
      </tr>
      <tr>
      <th colspan="2">Cylinders</th><td>3L</td>
      </tr>
      <tr>
      <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
      <td>105</td>
      </tr>
      <tr>
      <th>Stroke (KG)</th><td>120</td>
      </tr>
      </table>`,
    category: "Deutz",
  },
  {
    image: "below100kva.jpg",
    name: "Highlander Deutz 69",
    range: 69,
    description: `<table border="1">
      <tr>
      <th rowspan="2">Standby Power</th><th>KVA</th>
      <td>69</td>
      </tr>
      <tr>
      <th>KW</th><td>55</td>
      </tr>
      <tr>
      <th rowspan="3">Prime Power</th><th>KVA</th>
      <td>62</td>
      </tr>
      <tr>
      <th>KW</th><td>50</td>
      </tr>
      <tr>
      <th>A</th><td>90</td>
      </tr>
      <tr>
      <th colspan="2">Engine Model</th><td>TD226B-4DI</td>
      </tr>
      <tr>
      <th>Fuel <br>Consumption</th><th>g/kW.h</th>
      <td></td>
      </tr>
      <tr>
      <th colspan="2">Cylinders</th><td>4L</td>
      </tr>
      <tr>
      <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
      <td>105</td>
      </tr>
      <tr>
      <th>Stroke (KG)</th><td>120</td>
      </tr>
      </table>`,
    category: "Deutz",
  },
  {
    image: "below100kva.jpg",
    name: "Highlander Deutz 100",
    range: 100,
    description: `<table border="1">
      <tr>
      <th rowspan="2">Standby Power</th><th>KVA</th>
      <td>100</td>
      </tr>
      <tr>
      <th>KW</th><td>80</td>
      </tr>
      <tr>
      <th rowspan="3">Prime Power</th><th>KVA</th>
      <td>90</td>
      </tr>
      <tr>
      <th>KW</th><td>72</td>
      </tr>
      <tr>
      <th>A</th><td>130</td>
      </tr>
      <tr>
      <th colspan="2">Engine Model</th><td>TD226B-6D</td>
      </tr>
      <tr>
      <th>Fuel <br>Consumption</th><th>g/kW.h</th>
      <td></td>
      </tr>
      <tr>
      <th colspan="2">Cylinders</th><td>6L</td>
      </tr>
      <tr>
      <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
      <td>105</td>
      </tr>
      <tr>
      <th>Stroke (KG)</th><td>120</td>
      </tr>
      </table>`,
    category: "Deutz",
  },
  {
    image: "below100kva.jpg",
    name: "Highlander Deutz 104",
    range: 104,
    description: `<table border="1">
      <tr>
      <th rowspan="2">Standby Power</th><th>KVA</th>
      <td>104</td>
      </tr>
      <tr>
      <th>KW</th><td>83</td>
      </tr>
      <tr>
      <th rowspan="3">Prime Power</th><th>KVA</th>
      <td>94</td>
      </tr>
      <tr>
      <th>KW</th><td>75</td>
      </tr>
      <tr>
      <th>A</th><td>135</td>
      </tr>
      <tr>
      <th colspan="2">Engine Model</th><td>TD226B-6D</td>
      </tr>
      <tr>
      <th>Fuel <br>Consumption</th><th>g/kW.h</th>
      <td></td>
      </tr>
      <tr>
      <th colspan="2">Cylinders</th><td>6L</td>
      </tr>
      <tr>
      <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
      <td>105</td>
      </tr>
      <tr>
      <th>Stroke (KG)</th><td>120</td>
      </tr>
      </table>`,
    category: "Deutz",
  },
  {
    image: "below100kva.jpg",
    name: "Highlander Deutz 124",
    range: 124,
    description: `<table border="1">
      <tr>
      <th rowspan="2">Standby Power</th><th>KVA</th>
      <td>124</td>
      </tr>
      <tr>
      <th>KW</th><td>99</td>
      </tr>
      <tr>
      <th rowspan="3">Prime Power</th><th>KVA</th>
      <td>112</td>
      </tr>
      <tr>
      <th>KW</th><td>90</td>
      </tr>
      <tr>
      <th>A</th><td>162</td>
      </tr>
      <tr>
      <th colspan="2">Engine Model</th><td>TD226B-4DI</td>
      </tr>
      <tr>
      <th>Fuel <br>Consumption</th><th>g/kW.h</th>
      <td></td>
      </tr>
      <tr>
      <th colspan="2">Cylinders</th><td>6L</td>
      </tr>
      <tr>
      <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
      <td>105</td>
      </tr>
      <tr>
      <th>Stroke (KG)</th><td>120</td>
      </tr>
      </table>`,
    category: "Deutz",
  },
  {
    image: "below100kva.jpg",
    name: "Highlander Deutz 138",
    range: 138,
    description: `<table border="1">
      <tr>
      <th rowspan="2">Standby Power</th><th>KVA</th>
      <td>138</td>
      </tr>
      <tr>
      <th>KW</th><td>110</td>
      </tr>
      <tr>
      <th rowspan="3">Prime Power</th><th>KVA</th>
      <td>125</td>
      </tr>
      <tr>
      <th>KW</th><td>100</td>
      </tr>
      <tr>
      <th>A</th><td>180</td>
      </tr>
      <tr>
      <th colspan="2">Engine Model</th><td>TD226B-6D</td>
      </tr>
      <tr>
      <th>Fuel <br>Consumption</th><th>g/kW.h</th>
      <td></td>
      </tr>
      <tr>
      <th colspan="2">Cylinders</th><td>6L</td>
      </tr>
      <tr>
      <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
      <td>105</td>
      </tr>
      <tr>
      <th>Stroke (KG)</th><td>120</td>
      </tr>
      </table>`,
    category: "Deutz",
  },
  {
    image: "below100kva.jpg",
    name: "Highlander Deutz 165",
    range: 165,
    description: `<table border="1">
      <tr>
      <th rowspan="2">Standby Power</th><th>KVA</th>
      <td>165</td>
      </tr>
      <tr>
      <th>KW</th><td>132</td>
      </tr>
      <tr>
      <th rowspan="3">Prime Power</th><th>KVA</th>
      <td>150</td>
      </tr>
      <tr>
      <th>KW</th><td>120</td>
      </tr>
      <tr>
      <th>A</th><td>216</td>
      </tr>
      <tr>
      <th colspan="2">Engine Model</th><td>TD226B-6D5</td>
      </tr>
      <tr>
      <th>Fuel <br>Consumption</th><th>g/kW.h</th>
      <td></td>
      </tr>
      <tr>
      <th colspan="2">Cylinders</th><td>6L</td>
      </tr>
      <tr>
      <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
      <td>105</td>
      </tr>
      <tr>
      <th>Stroke (KG)</th><td>120</td>
      </tr>
      </table>`,
    category: "Deutz",
  },
  {
    image: "below100kva.jpg",
    name: "Highlander Perkins 10",
    range: 10,
    description: `<table border="1">
      <tr>
      <th rowspan="2">Standby Power</th><th>KVA</th>
      <td>10</td>
      </tr>
      <tr>
      <th>KW</th><td>8</td>
      </tr>
      <tr>
      <th rowspan="3">Prime Power</th><th>KVA</th>
      <td>9</td>
      </tr>
      <tr>
      <th>KW</th><td>7</td>
      </tr>
      <tr>
      <th>A</th><td>13</td>
      </tr>
      <tr>
      <th colspan="2">Engine Model</th><td>403D-11</td>
      </tr>
      <tr>
      <th>Fuel <br>Consumption</th><th>g/kW.h</th>
      <td>2.9</td>
      </tr>
      <tr>
      <th colspan="2">Cylinders</th><td>3L</td>
      </tr>
      <tr>
      <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
      <td>77</td>
      </tr>
      <tr>
      <th>Stroke (KG)</th><td>81</td>
      </tr>
      </table>`,
    category: "Perkins",
  },
  {
    image: "below100kva.jpg",
    name: "Highlander Perkins 14",
    range: 14,
    description: `<table border="1">
      <tr>
      <th rowspan="2">Standby Power</th><th>KVA</th>
      <td>14</td>
      </tr>
      <tr>
      <th>KW</th><td>11</td>
      </tr>
      <tr>
      <th rowspan="3">Prime Power</th><th>KVA</th>
      <td>13</td>
      </tr>
      <tr>
      <th>KW</th><td>10</td>
      </tr>
      <tr>
      <th>A</th><td>18</td>
      </tr>
      <tr>
      <th colspan="2">Engine Model</th><td>403D-15G</td>
      </tr>
      <tr>
      <th>Fuel <br>Consumption</th><th>g/kW.h</th>
      <td>8.8</td>
      </tr>
      <tr>
      <th colspan="2">Cylinders</th><td>3L</td>
      </tr>
      <tr>
      <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
      <td>84</td>
      </tr>
      <tr>
      <th>Stroke (KG)</th><td>90</td>
      </tr>
      </table>`,
    category: "Perkins",
  },
  {
    image: "below100kva.jpg",
    name: "Highlander Perkins 22",
    range: 22,
    description: `<table border="1">
      <tr>
      <th rowspan="2">Standby Power</th><th>KVA</th>
      <td>22</td>
      </tr>
      <tr>
      <th>KW</th><td>18</td>
      </tr>
      <tr>
      <th rowspan="3">Prime Power</th><th>KVA</th>
      <td>20</td>
      </tr>
      <tr>
      <th>KW</th><td>16</td>
      </tr>
      <tr>
      <th>A</th><td>29</td>
      </tr>
      <tr>
      <th colspan="2">Engine Model</th><td>403D-22G</td>
      </tr>
      <tr>
      <th>Fuel <br>Consumption</th><th>g/kW.h</th>
      <td>5.4</td>
      </tr>
      <tr>
      <th colspan="2">Cylinders</th><td>4L</td>
      </tr>
      <tr>
      <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
      <td>84</td>
      </tr>
      <tr>
      <th>Stroke (KG)</th><td>100</td>
      </tr>
      </table>`,
    category: "Perkins",
  },
  {
    image: "below100kva.jpg",
    name: "Highlander Perkins 30",
    range: 30,
    description: `<table border="1">
      <tr>
      <th rowspan="2">Standby Power</th><th>KVA</th>
      <td>30</td>
      </tr>
      <tr>
      <th>KW</th><td>24</td>
      </tr>
      <tr>
      <th rowspan="3">Prime Power</th><th>KVA</th>
      <td>28</td>
      </tr>
      <tr>
      <th>KW</th><td>22</td>
      </tr>
      <tr>
      <th>A</th><td>40</td>
      </tr>
      <tr>
      <th colspan="2">Engine Model</th><td>1103A-33G</td>
      </tr>
      <tr>
      <th>Fuel <br>Consumption</th><th>g/kW.h</th>
      <td>7.1</td>
      </tr>
      <tr>
      <th colspan="2">Cylinders</th><td>3L</td>
      </tr>
      <tr>
      <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
      <td>105</td>
      </tr>
      <tr>
      <th>Stroke (KG)</th><td>127</td>
      </tr>
      </table>`,
    category: "Perkins",
  },
  {
    image: "below100kva.jpg",
    name: "Highlander Perkins 50",
    range: 50,
    description: `<table border="1">
      <tr>
      <th rowspan="2">Standby Power</th><th>KVA</th>
      <td>50</td>
      </tr>
      <tr>
      <th>KW</th><td>40</td>
      </tr>
      <tr>
      <th rowspan="3">Prime Power</th><th>KVA</th>
      <td>45</td>
      </tr>
      <tr>
      <th>KW</th><td>36</td>
      </tr>
      <tr>
      <th>A</th><td>65</td>
      </tr>
      <tr>
      <th colspan="2">Engine Model</th><td>1103A-33TG1</td>
      </tr>
      <tr>
      <th>Fuel <br>Consumption</th><th>g/kW.h</th>
      <td>10.7</td>
      </tr>
      <tr>
      <th colspan="2">Cylinders</th><td>3L</td>
      </tr>
      <tr>
      <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
      <td>105</td>
      </tr>
      <tr>
      <th>Stroke (KG)</th><td>127</td>
      </tr>
      </table>`,
    category: "Perkins",
  },
  {
    image: "below100kva.jpg",
    name: "Highlander Perkins 65",
    range: 65,
    description: `<table border="1">
      <tr>
      <th rowspan="2">Standby Power</th><th>KVA</th>
      <td>65</td>
      </tr>
      <tr>
      <th>KW</th><td>52</td>
      </tr>
      <tr>
      <th rowspan="3">Prime Power</th><th>KVA</th>
      <td>60</td>
      </tr>
      <tr>
      <th>KW</th><td>48</td>
      </tr>
      <tr>
      <th>A</th><td>87</td>
      </tr>
      <tr>
      <th colspan="2">Engine Model</th><td>1103A-33TG2</td>
      </tr>
      <tr>
      <th>Fuel <br>Consumption</th><th>g/kW.h</th>
      <td>13.9</td>
      </tr>
      <tr>
      <th colspan="2">Cylinders</th><td>4L</td>
      </tr>
      <tr>
      <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
      <td>105</td>
      </tr>
      <tr>
      <th>Stroke (KG)</th><td>127</td>
      </tr>
      </table>`,
    category: "Perkins",
  },
  {
    image: "below100kva.jpg",
    name: "Highlander Perkins 72",
    range: 72,
    description: `<table border="1">
      <tr>
      <th rowspan="2">Standby Power</th><th>KVA</th>
      <td>72</td>
      </tr>
      <tr>
      <th>KW</th><td>58</td>
      </tr>
      <tr>
      <th rowspan="3">Prime Power</th><th>KVA</th>
      <td>65</td>
      </tr>
      <tr>
      <th>KW</th><td>52</td>
      </tr>
      <tr>
      <th>A</th><td>94</td>
      </tr>
      <tr>
      <th colspan="2">Engine Model</th><td>1104A-44TG1</td>
      </tr>
      <tr>
      <th>Fuel <br>Consumption</th><th>g/kW.h</th>
      <td>14.8</td>
      </tr>
      <tr>
      <th colspan="2">Cylinders</th><td>4L</td>
      </tr>
      <tr>
      <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
      <td>105</td>
      </tr>
      <tr>
      <th>Stroke (KG)</th><td>127</td>
      </tr>
      </table>`,
    category: "Perkins",
  },
  {
    image: "below100kva.jpg",
    name: "Highlander Perkins 88",
    range: 88,
    description: `<table border="1">
      <tr>
      <th rowspan="2">Standby Power</th><th>KVA</th>
      <td>88</td>
      </tr>
      <tr>
      <th>KW</th><td>70</td>
      </tr>
      <tr>
      <th rowspan="3">Prime Power</th><th>KVA</th>
      <td>80</td>
      </tr>
      <tr>
      <th>KW</th><td>64</td>
      </tr>
      <tr>
      <th>A</th><td>115</td>
      </tr>
      <tr>
      <th colspan="2">Engine Model</th><td>1104A-44TG2</td>
      </tr>
      <tr>
      <th>Fuel <br>Consumption</th><th>g/kW.h</th>
      <td>18.7</td>
      </tr>
      <tr>
      <th colspan="2">Cylinders</th><td>4L</td>
      </tr>
      <tr>
      <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
      <td>105</td>
      </tr>
      <tr>
      <th>Stroke (KG)</th><td>127</td>
      </tr>
      </table>`,
    category: "Perkins",
  },
  {
    image: "below100kva.jpg",
    name: "Highlander Perkins 110",
    range: 110,
    description: `<table border="1">
      <tr>
      <th rowspan="2">Standby Power</th><th>KVA</th>
      <td>110</td>
      </tr>
      <tr>
      <th>KW</th><td>88</td>
      </tr>
      <tr>
      <th rowspan="3">Prime Power</th><th>KVA</th>
      <td>100</td>
      </tr>
      <tr>
      <th>KW</th><td>80</td>
      </tr>
      <tr>
      <th>A</th><td>144</td>
      </tr>
      <tr>
      <th colspan="2">Engine Model</th><td>1104C-44TAG2</td>
      </tr>
      <tr>
      <th>Fuel <br>Consumption</th><th>g/kW.h</th>
      <td>22.6</td>
      </tr>
      <tr>
      <th colspan="2">Cylinders</th><td>4L</td>
      </tr>
      <tr>
      <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
      <td>105</td>
      </tr>
      <tr>
      <th>Stroke (KG)</th><td>127</td>
      </tr>
      </table>`,
    category: "Perkins",
  },
  {
    image: "below100kva.jpg",
    name: "Highlander Perkins 138",
    range: 138,
    description: `<table border="1">
      <tr>
      <th rowspan="2">Standby Power</th><th>KVA</th>
      <td>138</td>
      </tr>
      <tr>
      <th>KW</th><td>110</td>
      </tr>
      <tr>
      <th rowspan="3">Prime Power</th><th>KVA</th>
      <td>125</td>
      </tr>
      <tr>
      <th>KW</th><td>100</td>
      </tr>
      <tr>
      <th>A</th><td>180</td>
      </tr>
      <tr>
      <th colspan="2">Engine Model</th><td>1006TAG</td>
      </tr>
      <tr>
      <th>Fuel <br>Consumption</th><th>g/kW.h</th>
      <td>28</td>
      </tr>
      <tr>
      <th colspan="2">Cylinders</th><td>6L</td>
      </tr>
      <tr>
      <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
      <td>100</td>
      </tr>
      <tr>
      <th>Stroke (KG)</th><td>127</td>
      </tr>
      </table>`,
    category: "Perkins",
  },
  {
    image: "below100kva.jpg",
    name: "Highlander Perkins 165",
    range: 165,
    description: `<table border="1">
      <tr>
      <th rowspan="2">Standby Power</th><th>KVA</th>
      <td>165</td>
      </tr>
      <tr>
      <th>KW</th><td>132</td>
      </tr>
      <tr>
      <th rowspan="3">Prime Power</th><th>KVA</th>
      <td>150</td>
      </tr>
      <tr>
      <th>KW</th><td>120</td>
      </tr>
      <tr>
      <th>A</th><td>216</td>
      </tr>
      <tr>
      <th colspan="2">Engine Model</th><td>1006TAG2</td>
      </tr>
      <tr>
      <th>Fuel <br>Consumption</th><th>g/kW.h</th>
      <td>41</td>
      </tr>
      <tr>
      <th colspan="2">Cylinders</th><td>6L</td>
      </tr>
      <tr>
      <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
      <td>100</td>
      </tr>
      <tr>
      <th>Stroke (KG)</th><td>127</td>
      </tr>
      </table>`,
    category: "Perkins",
  },
  {
    image: "below100kva.jpg",
    name: "Highlander Perkins 200",
    range: 200,
    description: `<table border="1">
      <tr>
      <th rowspan="2">Standby Power</th><th>KVA</th>
      <td>200</td>
      </tr>
      <tr>
      <th>KW</th><td>160</td>
      </tr>
      <tr>
      <th rowspan="3">Prime Power</th><th>KVA</th>
      <td>181</td>
      </tr>
      <tr>
      <th>KW</th><td>145</td>
      </tr>
      <tr>
      <th>A</th><td>262</td>
      </tr>
      <tr>
      <th colspan="2">Engine Model</th><td>1106C-E66TAG4</td>
      </tr>
      <tr>
      <th>Fuel <br>Consumption</th><th>g/kW.h</th>
      <td>43</td>
      </tr>
      <tr>
      <th colspan="2">Cylinders</th><td>4L</td>
      </tr>
      <tr>
      <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
      <td>105</td>
      </tr>
      <tr>
      <th>Stroke (KG)</th><td>127</td>
      </tr>
      </table>`,
    category: "Perkins",
  },
  {
    image: "below100kva.jpg",
    name: "Highlander Perkins 220",
    range: 220,
    description: `<table border="1">
      <tr>
      <th rowspan="2">Standby Power</th><th>KVA</th>
      <td>220</td>
      </tr>
      <tr>
      <th>KW</th><td>176</td>
      </tr>
      <tr>
      <th rowspan="3">Prime Power</th><th>KVA</th>
      <td>200</td>
      </tr>
      <tr>
      <th>KW</th><td>160</td>
      </tr>
      <tr>
      <th>A</th><td>289</td>
      </tr>
      <tr>
      <th colspan="2">Engine Model</th><td>1306C-E87TAG3</td>
      </tr>
      <tr>
      <th>Fuel <br>Consumption</th><th>g/kW.h</th>
      <td>49.1</td>
      </tr>
      <tr>
      <th colspan="2">Cylinders</th><td>6L</td>
      </tr>
      <tr>
      <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
      <td>116</td>
      </tr>
      <tr>
      <th>Stroke (KG)</th><td>136</td>
      </tr>
      </table>`,
    category: "Perkins",
  },
  
  {
    image: "below100kva.jpg",
    name: "Highlander Perkins 275",
    range: 275,
    description: `<table border="1">
      <tr>
      <th rowspan="2">Standby Power</th><th>KVA</th>
      <td>275</td>
      </tr>
      <tr>
      <th>KW</th><td>220</td>
      </tr>
      <tr>
      <th rowspan="3">Prime Power</th><th>KVA</th>
      <td>250</td>
      </tr>
      <tr>
      <th>KW</th><td>200</td>
      </tr>
      <tr>
      <th>A</th><td>361</td>
      </tr>
      <tr>
      <th colspan="2">Engine Model</th><td>2206C-E87TAG6</td>
      </tr>
      <tr>
      <th>Fuel <br>Consumption</th><th>g/kW.h</th>
      <td>59.9</td>
      </tr>
      <tr>
      <th colspan="2">Cylinders</th><td>6L</td>
      </tr>
      <tr>
      <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
      <td>116</td>
      </tr>
      <tr>
      <th>Stroke (KG)</th><td>136</td>
      </tr>
      </table>`,
    category: "Perkins",
  },
  {
    image: "below100kva.jpg",
    name: "Highlander Perkins 350",
    range: 350,
    description: `<table border="1">
      <tr>
      <th rowspan="2">Standby Power</th><th>KVA</th>
      <td>350</td>
      </tr>
      <tr>
      <th>KW</th><td>275</td>
      </tr>
      <tr>
      <th rowspan="3">Prime Power</th><th>KVA</th>
      <td>313</td>
      </tr>
      <tr>
      <th>KW</th><td>250</td>
      </tr>
      <tr>
      <th>A</th><td>451</td>
      </tr>
      <tr>
      <th colspan="2">Engine Model</th><td>2206C-E13TAG2</td>
      </tr>
      <tr>
      <th>Fuel <br>Consumption</th><th>g/kW.h</th>
      <td>71</td>
      </tr>
      <tr>
      <th colspan="2">Cylinders</th><td>6L</td>
      </tr>
      <tr>
      <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
      <td>130</td>
      </tr>
      <tr>
      <th>Stroke (KG)</th><td>157</td>
      </tr>
      </table>`,
    category: "Perkins",
  },
  {
    image: "below100kva.jpg",
    name: "Highlander Perkins 375",
    range: 375,
    description: `<table border="1">
      <tr>
      <th rowspan="2">Standby Power</th><th>KVA</th>
      <td>375</td>
      </tr>
      <tr>
      <th>KW</th><td>300</td>
      </tr>
      <tr>
      <th rowspan="3">Prime Power</th><th>KVA</th>
      <td>350</td>
      </tr>
      <tr>
      <th>KW</th><td>280</td>
      </tr>
      <tr>
      <th>A</th><td>505</td>
      </tr>
      <tr>
      <th colspan="2">Engine Model</th><td>2206C-E13TAG2</td>
      </tr>
      <tr>
      <th>Fuel <br>Consumption</th><th>g/kW.h</th>
      <td>71</td>
      </tr>
      <tr>
      <th colspan="2">Cylinders</th><td>6L</td>
      </tr>
      <tr>
      <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
      <td>130</td>
      </tr>
      <tr>
      <th>Stroke (KG)</th><td>157</td>
      </tr>
      </table>`,
    category: "Perkins",
  },
  {
    image: "below100kva.jpg",
    name: "Highlander Perkins 413",
    range: 413,
    description: `<table border="1">
      <tr>
      <th rowspan="2">Standby Power</th><th>KVA</th>
      <td>413</td>
      </tr>
      <tr>
      <th>KW</th><td>330</td>
      </tr>
      <tr>
      <th rowspan="3">Prime Power</th><th>KVA</th>
      <td>375</td>
      </tr>
      <tr>
      <th>KW</th><td>300</td>
      </tr>
      <tr>
      <th>A</th><td>541</td>
      </tr>
      <tr>
      <th colspan="2">Engine Model</th><td>2206C-E13TAG3</td>
      </tr>
      <tr>
      <th>Fuel <br>Consumption</th><th>g/kW.h</th>
      <td>81</td>
      </tr>
      <tr>
      <th colspan="2">Cylinders</th><td>6L</td>
      </tr>
      <tr>
      <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
      <td>130</td>
      </tr>
      <tr>
      <th>Stroke (KG)</th><td>157</td>
      </tr>
      </table>`,
    category: "Perkins",
  },
  {
    image: "below100kva.jpg",
    name: "Highlander Perkins 450",
    range: 450,
    description: `<table border="1">
      <tr>
      <th rowspan="2">Standby Power</th><th>KVA</th>
      <td>450</td>
      </tr>
      <tr>
      <th>KW</th><td>360</td>
      </tr>
      <tr>
      <th rowspan="3">Prime Power</th><th>KVA</th>
      <td>400</td>
      </tr>
      <tr>
      <th>KW</th><td>320</td>
      </tr>
      <tr>
      <th>A</th><td>577</td>
      </tr>
      <tr>
      <th colspan="2">Engine Model</th><td>2206C-E13TAG3</td>
      </tr>
      <tr>
      <th>Fuel <br>Consumption</th><th>g/kW.h</th>
      <td>81</td>
      </tr>
      <tr>
      <th colspan="2">Cylinders</th><td>6L</td>
      </tr>
      <tr>
      <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
      <td>130</td>
      </tr>
      <tr>
      <th>Stroke (KG)</th><td>157</td>
      </tr>
      </table>`,
    category: "Perkins",
  },
  {
    image: "below100kva.jpg",
    name: "Highlander Perkins 500",
    range: 500,
    description: `<table border="1">
      <tr>
      <th rowspan="2">Standby Power</th><th>KVA</th>
      <td>500</td>
      </tr>
      <tr>
      <th>KW</th><td>400</td>
      </tr>
      <tr>
      <th rowspan="3">Prime Power</th><th>KVA</th>
      <td>450</td>
      </tr>
      <tr>
      <th>KW</th><td>360</td>
      </tr>
      <tr>
      <th>A</th><td>649</td>
      </tr>
      <tr>
      <th colspan="2">Engine Model</th><td>2506C-E15TAG1</td>
      </tr>
      <tr>
      <th>Fuel <br>Consumption</th><th>g/kW.h</th>
      <td>95</td>
      </tr>
      <tr>
      <th colspan="2">Cylinders</th><td>6L</td>
      </tr>
      <tr>
      <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
      <td>137</td>
      </tr>
      <tr>
      <th>Stroke (KG)</th><td>171</td>
      </tr>
      </table>`,
    category: "Perkins",
  },
  {
    image: "below100kva.jpg",
    name: "Highlander Perkins 550",
    range: 550,
    description: `<table border="1">
      <tr>
      <th rowspan="2">Standby Power</th><th>KVA</th>
      <td>550</td>
      </tr>
      <tr>
      <th>KW</th><td>440</td>
      </tr>
      <tr>
      <th rowspan="3">Prime Power</th><th>KVA</th>
      <td>500</td>
      </tr>
      <tr>
      <th>KW</th><td>400</td>
      </tr>
      <tr>
      <th>A</th><td>722</td>
      </tr>
      <tr>
      <th colspan="2">Engine Model</th><td>2506C-E15TAG2</td>
      </tr>
      <tr>
      <th>Fuel <br>Consumption</th><th>g/kW.h</th>
      <td>105</td>
      </tr>
      <tr>
      <th colspan="2">Cylinders</th><td>6L</td>
      </tr>
      <tr>
      <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
      <td>137</td>
      </tr>
      <tr>
      <th>Stroke (KG)</th><td>171</td>
      </tr>
      </table>`,
    category: "Perkins",
  },
  {
    image: "below100kva.jpg",
    name: "Highlander Perkins 625",
    range: 625,
    description: `<table border="1">
      <tr>
      <th rowspan="2">Standby Power</th><th>KVA</th>
      <td>625</td>
      </tr>
      <tr>
      <th>KW</th><td>500</td>
      </tr>
      <tr>
      <th rowspan="3">Prime Power</th><th>KVA</th>
      <td>563</td>
      </tr>
      <tr>
      <th>KW</th><td>450</td>
      </tr>
      <tr>
      <th>A</th><td>812</td>
      </tr>
      <tr>
      <th colspan="2">Engine Model</th><td>2806C-E18TAG1A</td>
      </tr>
      <tr>
      <th>Fuel <br>Consumption</th><th>g/kW.h</th>
      <td>139.8</td>
      </tr>
      <tr>
      <th colspan="2">Cylinders</th><td>6L</td>
      </tr>
      <tr>
      <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
      <td>145</td>
      </tr>
      <tr>
      <th>Stroke (KG)</th><td>183</td>
      </tr>
      </table>`,
    category: "Perkins",
  },
  {
    image: "below100kva.jpg",
    name: "Highlander Perkins 660",
    range: 660,
    description: `<table border="1">
      <tr>
      <th rowspan="2">Standby Power</th><th>KVA</th>
      <td>660</td>
      </tr>
      <tr>
      <th>KW</th><td>528</td>
      </tr>
      <tr>
      <th rowspan="3">Prime Power</th><th>KVA</th>
      <td>600</td>
      </tr>
      <tr>
      <th>KW</th><td>480</td>
      </tr>
      <tr>
      <th>A</th><td>866</td>
      </tr>
      <tr>
      <th colspan="2">Engine Model</th><td>2806C-E18TAG1A</td>
      </tr>
      <tr>
      <th>Fuel <br>Consumption</th><th>g/kW.h</th>
      <td>139.8</td>
      </tr>
      <tr>
      <th colspan="2">Cylinders</th><td>6L</td>
      </tr>
      <tr>
      <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
      <td>145</td>
      </tr>
      <tr>
      <th>Stroke (KG)</th><td>183</td>
      </tr>
      </table>`,
    category: "Perkins",
  },
  {
    image: "below100kva.jpg",
    name: "Highlander Perkins 688",
    range: 688,
    description: `<table border="1">
      <tr>
      <th rowspan="2">Standby Power</th><th>KVA</th>
      <td>688</td>
      </tr>
      <tr>
      <th>KW</th><td>550</td>
      </tr>
      <tr>
      <th rowspan="3">Prime Power</th><th>KVA</th>
      <td>625</td>
      </tr>
      <tr>
      <th>KW</th><td>500</td>
      </tr>
      <tr>
      <th>A</th><td>902</td>
      </tr>
      <tr>
      <th colspan="2">Engine Model</th><td>2806A-E18TAG2</td>
      </tr>
      <tr>
      <th>Fuel <br>Consumption</th><th>g/kW.h</th>
      <td>143</td>
      </tr>
      <tr>
      <th colspan="2">Cylinders</th><td>6L</td>
      </tr>
      <tr>
      <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
      <td>145</td>
      </tr>
      <tr>
      <th>Stroke (KG)</th><td>183</td>
      </tr>
      </table>`,
    category: "Perkins",
  },
  {
    image: "below100kva.jpg",
    name: "Highlander Perkins 725",
    range: 725,
    description: `<table border="1">
      <tr>
      <th rowspan="2">Standby Power</th><th>KVA</th>
      <td>725</td>
      </tr>
      <tr>
      <th>KW</th><td>580</td>
      </tr>
      <tr>
      <th rowspan="3">Prime Power</th><th>KVA</th>
      <td>650</td>
      </tr>
      <tr>
      <th>KW</th><td>520</td>
      </tr>
      <tr>
      <th>A</th><td>938</td>
      </tr>
      <tr>
      <th colspan="2">Engine Model</th><td>2806A-E18TAG2</td>
      </tr>
      <tr>
      <th>Fuel <br>Consumption</th><th>g/kW.h</th>
      <td>143</td>
      </tr>
      <tr>
      <th colspan="2">Cylinders</th><td>6L</td>
      </tr>
      <tr>
      <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
      <td>145</td>
      </tr>
      <tr>
      <th>Stroke (KG)</th><td>183</td>
      </tr>
      </table>`,
    category: "Perkins",
  },
  {
    image: "below100kva.jpg",
    name: "Highlander Perkins 800",
    range: 800,
    description: `<table border="1">
      <tr>
      <th rowspan="2">Standby Power</th><th>KVA</th>
      <td>800</td>
      </tr>
      <tr>
      <th>KW</th><td>640</td>
      </tr>
      <tr>
      <th rowspan="3">Prime Power</th><th>KVA</th>
      <td>725</td>
      </tr>
      <tr>
      <th>KW</th><td>580</td>
      </tr>
      <tr>
      <th>A</th><td>1046</td>
      </tr>
      <tr>
      <th colspan="2">Engine Model</th><td>4006-23TAG2A</td>
      </tr>
      <tr>
      <th>Fuel <br>Consumption</th><th>g/kW.h</th>
      <td>155</td>
      </tr>
      <tr>
      <th colspan="2">Cylinders</th><td>6L</td>
      </tr>
      <tr>
      <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
      <td>160</td>
      </tr>
      <tr>
      <th>Stroke (KG)</th><td>190</td>
      </tr>
      </table>`,
    category: "Perkins",
  },
  {
    image: "below100kva.jpg",
    name: "Highlander Perkins 825",
    range: 825,
    description: `<table border="1">
      <tr>
      <th rowspan="2">Standby Power</th><th>KVA</th>
      <td>825</td>
      </tr>
      <tr>
      <th>KW</th><td>660</td>
      </tr>
      <tr>
      <th rowspan="3">Prime Power</th><th>KVA</th>
      <td>750</td>
      </tr>
      <tr>
      <th>KW</th><td>600</td>
      </tr>
      <tr>
      <th>A</th><td>1082</td>
      </tr>
      <tr>
      <th colspan="2">Engine Model</th><td>4006-23TAG3A</td>
      </tr>
      <tr>
      <th>Fuel <br>Consumption</th><th>g/kW.h</th>
      <td>165</td>
      </tr>
      <tr>
      <th colspan="2">Cylinders</th><td>6L</td>
      </tr>
      <tr>
      <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
      <td>160</td>
      </tr>
      <tr>
      <th>Stroke (KG)</th><td>190</td>
      </tr>
      </table>`,
    category: "Perkins",
  },
  {
    image: "below100kva.jpg",
    name: "Highlander Perkins 880",
    range: 880,
    description: `<table border="1">
      <tr>
      <th rowspan="2">Standby Power</th><th>KVA</th>
      <td>880</td>
      </tr>
      <tr>
      <th>KW</th><td>704</td>
      </tr>
      <tr>
      <th rowspan="3">Prime Power</th><th>KVA</th>
      <td>800</td>
      </tr>
      <tr>
      <th>KW</th><td>640</td>
      </tr>
      <tr>
      <th>A</th><td>1155</td>
      </tr>
      <tr>
      <th colspan="2">Engine Model</th><td>4006-23TAG3</td>
      </tr>
      <tr>
      <th>Fuel <br>Consumption</th><th>g/kW.h</th>
      <td>165</td>
      </tr>
      <tr>
      <th colspan="2">Cylinders</th><td>6L</td>
      </tr>
      <tr>
      <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
      <td>160</td>
      </tr>
      <tr>
      <th>Stroke (KG)</th><td>190</td>
      </tr>
      </table>`,
    category: "Perkins",
  },
  
  {
    image: "below100kva.jpg",
    name: "Highlander Perkins 1375",
    range: 1375,
    description: `<table border="1">
      <tr>
      <th rowspan="2">Standby Power</th><th>KVA</th>
      <td>1375</td>
      </tr>
      <tr>
      <th>KW</th><td>1100</td>
      </tr>
      <tr>
      <th rowspan="3">Prime Power</th><th>KVA</th>
      <td>1250</td>
      </tr>
      <tr>
      <th>KW</th><td>1000</td>
      </tr>
      <tr>
      <th>A</th><td>1804</td>
      </tr>
      <tr>
      <th colspan="2">Engine Model</th><td>4012-46TWG2A</td>
      </tr>
      <tr>
      <th>Fuel <br>Consumption</th><th>g/kW.h</th>
      <td>265</td>
      </tr>
      <tr>
      <th colspan="2">Cylinders</th><td>12V</td>
      </tr>
      <tr>
      <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
      <td>160</td>
      </tr>
      <tr>
      <th>Stroke (KG)</th><td>190</td>
      </tr>
      </table>`,
    category: "Perkins",
  },
  {
    image: "below100kva.jpg",
    name: "Highlander Perkins 1500",
    range: 1500,
    description: `<table border="1">
      <tr>
      <th rowspan="2">Standby Power</th><th>KVA</th>
      <td>1500</td>
      </tr>
      <tr>
      <th>KW</th><td>1200</td>
      </tr>
      <tr>
      <th rowspan="3">Prime Power</th><th>KVA</th>
      <td>1375</td>
      </tr>
      <tr>
      <th>KW</th><td>1100</td>
      </tr>
      <tr>
      <th>A</th><td>1984</td>
      </tr>
      <tr>
      <th colspan="2">Engine Model</th><td>4012-46TWG3A</td>
      </tr>
      <tr>
      <th>Fuel <br>Consumption</th><th>g/kW.h</th>
      <td>258</td>
      </tr>
      <tr>
      <th colspan="2">Cylinders</th><td>12V</td>
      </tr>
      <tr>
      <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
      <td>160</td>
      </tr>
      <tr>
      <th>Stroke (KG)</th><td>190</td>
      </tr>
      </table>`,
    category: "Perkins",
  },
  {
    image: "below100kva.jpg",
    name: "Highlander Perkins 1650",
    range: 1650,
    description: `<table border="1">
      <tr>
      <th rowspan="2">Standby Power</th><th>KVA</th>
      <td>1650</td>
      </tr>
      <tr>
      <th>KW</th><td>1320</td>
      </tr>
      <tr>
      <th rowspan="3">Prime Power</th><th>KVA</th>
      <td>1500</td>
      </tr>
      <tr>
      <th>KW</th><td>1200</td>
      </tr>
      <tr>
      <th>A</th><td>2165</td>
      </tr>
      <tr>
      <th colspan="2">Engine Model</th><td>4012-46TWG2A</td>
      </tr>
      <tr>
      <th>Fuel <br>Consumption</th><th>g/kW.h</th>
      <td>265</td>
      </tr>
      <tr>
      <th colspan="2">Cylinders</th><td>12V</td>
      </tr>
      <tr>
      <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
      <td>160</td>
      </tr>
      <tr>
      <th>Stroke (KG)</th><td>190</td>
      </tr>
      </table>`,
    category: "Perkins",
  },
  {
    image: "below100kva.jpg",
    name: "Highlander Perkins 1850",
    range: 1850,
    description: `<table border="1">
      <tr>
      <th rowspan="2">Standby Power</th><th>KVA</th>
      <td>1850</td>
      </tr>
      <tr>
      <th>KW</th><td>1485</td>
      </tr>
      <tr>
      <th rowspan="3">Prime Power</th><th>KVA</th>
      <td>1688</td>
      </tr>
      <tr>
      <th>KW</th><td>1350</td>
      </tr>
      <tr>
      <th>A</th><td>2435</td>
      </tr>
      <tr>
      <th colspan="2">Engine Model</th><td>4012-46TA3A</td>
      </tr>
      <tr>
      <th>Fuel <br>Consumption</th><th>g/kW.h</th>
      <td>330/td>
      </tr>
      <tr>
      <th colspan="2">Cylinders</th><td>12V</td>
      </tr>
      <tr>
      <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
      <td>160</td>
      </tr>
      <tr>
      <th>Stroke (KG)</th><td>190</td>
      </tr>
      </table>`,
    category: "Perkins",
  },
  {
    image: "below100kva.jpg",
    name: "Highlander Perkins 1925",
    range: 1925,
    description: `<table border="1">
      <tr>
      <th rowspan="2">Standby Power</th><th>KVA</th>
      <td>1925</td>
      </tr>
      <tr>
      <th>KW</th><td>1540</td>
      </tr>
      <tr>
      <th rowspan="3">Prime Power</th><th>KVA</th>
      <td>1750</td>
      </tr>
      <tr>
      <th>KW</th><td>1400</td>
      </tr>
      <tr>
      <th>A</th><td>2526</td>
      </tr>
      <tr>
      <th colspan="2">Engine Model</th><td>4016TAG</td>
      </tr>
      <tr>
      <th>Fuel <br>Consumption</th><th>g/kW.h</th>
      <td>346.7</td>
      </tr>
      <tr>
      <th colspan="2">Cylinders</th><td>16V</td>
      </tr>
      <tr>
      <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
      <td>160</td>
      </tr>
      <tr>
      <th>Stroke (KG)</th><td>190</td>
      </tr>
      </table>`,
    category: "Perkins",
  },
  {
    image: "below100kva.jpg",
    name: "Highlander Perkins 2000",
    range: 2000,
    description: `<table border="1">
      <tr>
      <th rowspan="2">Standby Power</th><th>KVA</th>
      <td>2000</td>
      </tr>
      <tr>
      <th>KW</th><td>1600</td>
      </tr>
      <tr>
      <th rowspan="3">Prime Power</th><th>KVA</th>
      <td>1813</td>
      </tr>
      <tr>
      <th>KW</th><td>1450</td>
      </tr>
      <tr>
      <th>A</th><td>2616</td>
      </tr>
      <tr>
      <th colspan="2">Engine Model</th><td>4016TAG1A</td>
      </tr>
      <tr>
      <th>Fuel <br>Consumption</th><th>g/kW.h</th>
      <td>383</td>
      </tr>
      <tr>
      <th colspan="2">Cylinders</th><td>16V</td>
      </tr>
      <tr>
      <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
      <td>160</td>
      </tr>
      <tr>
      <th>Stroke (KG)</th><td>190</td>
      </tr>
      </table>`,
    category: "Perkins",
  },
  {
    image: "below100kva.jpg",
    name: "Highlander Perkins 2200",
    range: 2200,
    description: `<table border="1">
      <tr>
      <th rowspan="2">Standby Power</th><th>KVA</th>
      <td>2200</td>
      </tr>
      <tr>
      <th>KW</th><td>1760</td>
      </tr>
      <tr>
      <th rowspan="3">Prime Power</th><th>KVA</th>
      <td>2000</td>
      </tr>
      <tr>
      <th>KW</th><td>1600</td>
      </tr>
      <tr>
      <th>A</th><td>2886</td>
      </tr>
      <tr>
      <th colspan="2">Engine Model</th><td>4016TAG2A</td>
      </tr>
      <tr>
      <th>Fuel <br>Consumption</th><th>g/kW.h</th>
      <td>394.3</td>
      </tr>
      <tr>
      <th colspan="2">Cylinders</th><td>16V</td>
      </tr>
      <tr>
      <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
      <td>160</td>
      </tr>
      <tr>
      <th>Stroke (KG)</th><td>190</td>
      </tr>
      </table>`,
    category: "Perkins",
  },
  {
    image: "below100kva.jpg",
    name: "Highlander Perkins 2500",
    range: 2500,
    description: `<table border="1">
      <tr>
      <th rowspan="2">Standby Power</th><th>KVA</th>
      <td>2500</td>
      </tr>
      <tr>
      <th>KW</th><td>2000</td>
      </tr>
      <tr>
      <th rowspan="3">Prime Power</th><th>KVA</th>
      <td>2250</td>
      </tr>
      <tr>
      <th>KW</th><td>1800</td>
      </tr>
      <tr>
      <th>A</th><td>3247</td>
      </tr>
      <tr>
      <th colspan="2">Engine Model</th><td>4016-61TRG3</td>
      </tr>
      <tr>
      <th>Fuel <br>Consumption</th><th>g/kW.h</th>
      <td>394.3</td>
      </tr>
      <tr>
      <th colspan="2">Cylinders</th><td>16V</td>
      </tr>
      <tr>
      <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
      <td>160</td>
      </tr>
      <tr>
      <th>Stroke (KG)</th><td>190</td>
      </tr>
      </table>`,
    category: "Perkins",
  },
  {
    image: "below100kva.jpg",
    name: "Highlander Foton 22",
    range: 22,
    description: `<table border="1">
      <tr>
      <th rowspan="2">Standby Power</th><th>KVA</th>
      <td>22</td>
      </tr>
      <tr>
      <th>KW</th><td>18</td>
      </tr>
      <tr>
      <th rowspan="3">Prime Power</th><th>KVA</th>
      <td>20</td>
      </tr>
      <tr>
      <th>KW</th><td>16</td>
      </tr>
      <tr>
      <th>A</th><td>29</td>
      </tr>
      <tr>
      <th colspan="2">Engine Model</th><td>4JB1</td>
      </tr>
      <tr>
      <th>Fuel <br>Consumption</th><th>g/kW.h</th>
      <td>-</td>
      </tr>
      <tr>
      <th colspan="2">Cylinders</th><td>4L</td>
      </tr>
      <tr>
      <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
      <td>93</td>
      </tr>
      <tr>
      <th>Stroke (KG)</th><td>102</td>
      </tr>
      </table>`,
    category: "Foton",
  },
  {
    image: "below100kva.jpg",
    name: "Highlander Foton 28",
    range: 28,
    description: `<table border="1">
      <tr>
      <th rowspan="2">Standby Power</th><th>KVA</th>
      <td>28</td>
      </tr>
      <tr>
      <th>KW</th><td>22</td>
      </tr>
      <tr>
      <th rowspan="3">Prime Power</th><th>KVA</th>
      <td>25</td>
      </tr>
      <tr>
      <th>KW</th><td>20</td>
      </tr>
      <tr>
      <th>A</th><td>36</td>
      </tr>
      <tr>
      <th colspan="2">Engine Model</th><td>4JB1</td>
      </tr>
      <tr>
      <th>Fuel <br>Consumption</th><th>g/kW.h</th>
      <td>-</td>
      </tr>
      <tr>
      <th colspan="2">Cylinders</th><td>4L</td>
      </tr>
      <tr>
      <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
      <td>93</td>
      </tr>
      <tr>
      <th>Stroke (KG)</th><td>102</td>
      </tr>
      </table>`,
    category: "Foton",
  },
  {
    image: "below100kva.jpg",
    name: "Highlander Foton 35",
    range: 35,
    description: `<table border="1">
      <tr>
      <th rowspan="2">Standby Power</th><th>KVA</th>
      <td>35</td>
      </tr>
      <tr>
      <th>KW</th><td>28</td>
      </tr>
      <tr>
      <th rowspan="3">Prime Power</th><th>KVA</th>
      <td>31</td>
      </tr>
      <tr>
      <th>KW</th><td>25</td>
      </tr>
      <tr>
      <th>A</th><td>45</td>
      </tr>
      <tr>
      <th colspan="2">Engine Model</th><td>4JB1T</td>
      </tr>
      <tr>
      <th>Fuel <br>Consumption</th><th>g/kW.h</th>
      <td>-</td>
      </tr>
      <tr>
      <th colspan="2">Cylinders</th><td>4L</td>
      </tr>
      <tr>
      <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
      <td>93</td>
      </tr>
      <tr>
      <th>Stroke (KG)</th><td>102</td>
      </tr>
      </table>`,
    category: "Foton",
  },
  {
    image: "below100kva.jpg",
    name: "Highlander Lovol 50",
    range: 50,
    description: `<table border="1">
      <tr>
      <th rowspan="2">Standby Power</th><th>KVA</th>
      <td>50</td>
      </tr>
      <tr>
      <th>KW</th><td>40</td>
      </tr>
      <tr>
      <th rowspan="3">Prime Power</th><th>KVA</th>
      <td>45</td>
      </tr>
      <tr>
      <th>KW</th><td>36</td>
      </tr>
      <tr>
      <th>A</th><td>65</td>
      </tr>
      <tr>
      <th colspan="2">Engine Model</th><td>1004G</td>
      </tr>
      <tr>
      <th>Fuel <br>Consumption</th><th>g/kW.h</th>
      <td>-</td>
      </tr>
      <tr>
      <th colspan="2">Cylinders</th><td>4L</td>
      </tr>
      <tr>
      <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
      <td>100</td>
      </tr>
      <tr>
      <th>Stroke (KG)</th><td>127</td>
      </tr>
      </table>`,
    category: "Lovol",
  },
  {
    image: "below100kva.jpg",
    name: "Highlander Lovol 69",
    range: 69,
    description: `<table border="1">
      <tr>
      <th rowspan="2">Standby Power</th><th>KVA</th>
      <td>69</td>
      </tr>
      <tr>
      <th>KW</th><td>55</td>
      </tr>
      <tr>
      <th rowspan="3">Prime Power</th><th>KVA</th>
      <td>62</td>
      </tr>
      <tr>
      <th>KW</th><td>50</td>
      </tr>
      <tr>
      <th>A</th><td>90</td>
      </tr>
      <tr>
      <th colspan="2">Engine Model</th><td>1004TG</td>
      </tr>
      <tr>
      <th>Fuel <br>Consumption</th><th>g/kW.h</th>
      <td>-</td>
      </tr>
      <tr>
      <th colspan="2">Cylinders</th><td>4L</td>
      </tr>
      <tr>
      <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
      <td>100</td>
      </tr>
      <tr>
      <th>Stroke (KG)</th><td>127</td>
      </tr>
      </table>`,
    category: "Lovol",
  },
  {
    image: "below100kva.jpg",
    name: "Highlander Lovol 100",
    range: 100,
    description: `<table border="1">
      <tr>
      <th rowspan="2">Standby Power</th><th>KVA</th>
      <td>100</td>
      </tr>
      <tr>
      <th>KW</th><td>80</td>
      </tr>
      <tr>
      <th rowspan="3">Prime Power</th><th>KVA</th>
      <td>90</td>
      </tr>
      <tr>
      <th>KW</th><td>72</td>
      </tr>
      <tr>
      <th>A</th><td>130</td>
      </tr>
      <tr>
      <th colspan="2">Engine Model</th><td>1006TG1A</td>
      </tr>
      <tr>
      <th>Fuel <br>Consumption</th><th>g/kW.h</th>
      <td>-</td>
      </tr>
      <tr>
      <th colspan="2">Cylinders</th><td>6L</td>
      </tr>
      <tr>
      <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
      <td>100</td>
      </tr>
      <tr>
      <th>Stroke (KG)</th><td>127</td>
      </tr>
      </table>`,
    category: "Lovol",
  },
  {
    image: "below100kva.jpg",
    name: "Highlander Lovol 104",
    range: 104,
    description: `<table border="1">
      <tr>
      <th rowspan="2">Standby Power</th><th>KVA</th>
      <td>104</td>
      </tr>
      <tr>
      <th>KW</th><td>83</td>
      </tr>
      <tr>
      <th rowspan="3">Prime Power</th><th>KVA</th>
      <td>94</td>
      </tr>
      <tr>
      <th>KW</th><td>75</td>
      </tr>
      <tr>
      <th>A</th><td>135</td>
      </tr>
      <tr>
      <th colspan="2">Engine Model</th><td>1006TG1A</td>
      </tr>
      <tr>
      <th>Fuel <br>Consumption</th><th>g/kW.h</th>
      <td>-</td>
      </tr>
      <tr>
      <th colspan="2">Cylinders</th><td>6L</td>
      </tr>
      <tr>
      <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
      <td>100</td>
      </tr>
      <tr>
      <th>Stroke (KG)</th><td>127</td>
      </tr>
      </table>`,
    category: "Lovol",
  },
  {
    image: "below100kva.jpg",
    name: "Highlander Lovol 110",
    range: 110,
    description: `<table border="1">
      <tr>
      <th rowspan="2">Standby Power</th><th>KVA</th>
      <td>110</td>
      </tr>
      <tr>
      <th>KW</th><td>83</td>
      </tr>
      <tr>
      <th rowspan="3">Prime Power</th><th>KVA</th>
      <td>100</td>
      </tr>
      <tr>
      <th>KW</th><td>80</td>
      </tr>
      <tr>
      <th>A</th><td>144</td>
      </tr>
      <tr>
      <th colspan="2">Engine Model</th><td>1006T2A</td>
      </tr>
      <tr>
      <th>Fuel <br>Consumption</th><th>g/kW.h</th>
      <td>-</td>
      </tr>
      <tr>
      <th colspan="2">Cylinders</th><td>6L</td>
      </tr>
      <tr>
      <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
      <td>100</td>
      </tr>
      <tr>
      <th>Stroke (KG)</th><td>127</td>
      </tr>
      </table>`,
    category: "Lovol",
  },
  {
    image: "below100kva.jpg",
    name: "Highlander Lovol 151",
    range: 151,
    description: `<table border="1">
      <tr>
      <th rowspan="2">Standby Power</th><th>KVA</th>
      <td>151</td>
      </tr>
      <tr>
      <th>KW</th><td>121</td>
      </tr>
      <tr>
      <th rowspan="3">Prime Power</th><th>KVA</th>
      <td>138</td>
      </tr>
      <tr>
      <th>KW</th><td>110</td>
      </tr>
      <tr>
      <th>A</th><td>198</td>
      </tr>
      <tr>
      <th colspan="2">Engine Model</th><td>1006TAG</td>
      </tr>
      <tr>
      <th>Fuel <br>Consumption</th><th>g/kW.h</th>
      <td>-</td>
      </tr>
      <tr>
      <th colspan="2">Cylinders</th><td>6L</td>
      </tr>
      <tr>
      <th rowspan="2">Engine Data</th><th>BORE (mm)</th>
      <td>100</td>
      </tr>
      <tr>
      <th>Stroke (KG)</th><td>127</td>
      </tr>
      </table>`,
    category: "Lovol",
  },
  {
    image: "below100kva.jpg",
    name: "Highlander Mitsubishi",
    range: 100,
    description: `<table border="1">
      <tr>
      <th>Genset model</th><th>KVA</th>
      </tr>
      <tr>
      <td>Table cell 1</td><td>Table cell 2</td>
      </tr>
      <tr>
      <td>Table cell 3</td><td>Table cell 4</td>
      </tr>
      </table>`,
    category: "Mitsubishi",
  },
];

var detailId;
var activeCategory = "General";
var activeRange = "General";

$(document).ready(function () {
  $("#descriptionDiv").hide();
  let category = $("#selectCategory").val();
  let range = $("#selectRange").val();
  getAllCategory();
  getAllRange();
  getAllData();
  $("#selectCategory").change(function () {
    category = $("#selectCategory").val();
    activeCategory = $("#selectCategory").val();
    getDataByCategory(category);
  });
  $("#selectRange").change(function () {
    range = $("#selectRange").val();
    activeRange = $("#selectRange").val();
    getDataByRange(range);
  });
});

function getAllData() {
  $("#productDiv").empty();
  AllProduct.forEach((element, i) => {
    AllProduct[i].index = i;
    console.log(AllProduct[i].index);
    $("#productDiv").append(`
         <div class="col-sm-3">
            <div class="card" style="width: 18rem; border: none; margin: 20px; align-items: center;">
               <img src="./img/Produk/${element.image}" class="card-img-top" alt="sample">
               <div class="card-body" style="text-align-last: center;">
                     <h5 class="card-title" style="text-align: center;">${element.name}</h5>
                     <button type="button" onclick="setDetailId('${element.index}')" class="btn btn-warning text-white">Product Detail</button>
               </div>
            </div>
         </div>
   `);
  });
}

function getDataByCategory(category) {
  let ProductByCategory;
  console.log(category, "asdasd", activeRange);

  if (category === "General") {
    ProductByCategory = JSON.parse(JSON.stringify(AllProduct));
  } else {
    ProductByCategory = AllProduct.filter(
      (product) => product.category === category
    );
  }

  if (activeRange === "General") {
    console.log("do nothing");
  } else if (activeRange === "less than 100") {
    ProductByCategory = ProductByCategory.filter(
      (product) => product.range <= 99
    );
  } else if (activeRange === "100-500") {
    ProductByCategory = ProductByCategory.filter(
      (product) => product.range <= 500 && product.range > 99
    );
  } else if (activeRange === "501-1000") {
    ProductByCategory = ProductByCategory.filter(
      (product) => product.range <= 1000 && product.range > 500
    );
  } else if (activeRange === "1001-1500") {
    ProductByCategory = ProductByCategory.filter(
      (product) => product.range <= 1500 && product.range > 1000
    );
  } else if (activeRange === "1501-2000") {
    ProductByCategory = ProductByCategory.filter(
      (product) => product.range <= 2000 && product.range > 1500
    );
  } else if (activeRange === "2001-2500") {
    ProductByCategory = ProductByCategory.filter(
      (product) => product.range <= 2500 && product.range > 2000
    );
  } else {
    ProductByCategory = ProductByCategory.filter(
      (product) => product.range > 2500
    );
  }
  $("#productDiv").empty();
  ProductByCategory.forEach((element, i) => {
    //  console.log(element, i, "this is the element yes");
    $("#productDiv").append(`
         <div class="col-sm-3">
            <div class="card" style="width: 18rem; border: none; margin: 20px; align-items: center;">
               <img src="./img/Produk/${element.image}" class="card-img-top" alt="sample">
               <div class="card-body" style="text-align-last: center;">
                     <h5 class="card-title" style="text-align: center;">${element.name}</h5>
                     <button type="button" onclick="setDetailId('${element.index}')" class="btn btn-warning text-white">Product Detail</button>
               </div>
            </div>
         </div>
   `);
  });
}

function getDataByRange(range) {
  let ProductByRange;
  console.log(range, "asdasd", activeCategory);

  if (range === "General") {
    ProductByRange = JSON.parse(JSON.stringify(AllProduct));
  } else if (range === "less than 100") {
    ProductByRange = AllProduct.filter((product) => product.range <= 99);
  } else if (range === "100-500") {
    ProductByRange = AllProduct.filter(
      (product) => product.range <= 500 && product.range > 99
    );
  } else if (range === "501-1000") {
    ProductByRange = AllProduct.filter(
      (product) => product.range <= 1000 && product.range > 500
    );
  } else if (range === "1001-1500") {
    ProductByRange = AllProduct.filter(
      (product) => product.range <= 1500 && product.range > 1000
    );
  } else if (range === "1501-2000") {
    ProductByRange = AllProduct.filter(
      (product) => product.range <= 2000 && product.range > 1500
    );
  } else if (range === "2001-2500") {
    ProductByRange = AllProduct.filter(
      (product) => product.range <= 2500 && product.range > 2000
    );
  } else {
    ProductByRange = AllProduct.filter((product) => product.range > 2500);
  }

  if (activeCategory !== "General") {
    ProductByRange = ProductByRange.filter(
      (product) => product.category === activeCategory
    );
  }

  $("#productDiv").empty();
  ProductByRange.forEach((element, i) => {
    //  console.log(element, i, "this is the element yes");
    $("#productDiv").append(`
         <div class="col-sm-3">
            <div class="card" style="width: 18rem; border: none; margin: 20px; align-items: center;">
               <img src="./img/Produk/${element.image}" class="card-img-top" alt="sample">
               <div class="card-body" style="text-align-last: center;">
                     <h5 class="card-title" style="text-align: center;">${element.name}</h5>
                     <button type="button" onclick="setDetailId('${element.index}')" class="btn btn-warning text-white">Product Detail</button>
               </div>
            </div>
         </div>
   `);
  });
}

function getAllCategory() {
  $("#selectCategory").empty();
  AllCategory.forEach((element) => {
    //  console.log(element, "this is the category");
    $("#selectCategory").append(`
               <option selected value="${element}">${element}</option>
            `);
  });
  $("#selectCategory").append(`
        <option selected value="General">All Product</option>
    `);
}

function getAllRange() {
  $("#selectRange").empty();
  AllRange.forEach((element) => {
    //  console.log(element, "this is the range");
    $("#selectRange").append(`
          <option selected value="${element}">${element}</option>
      `);
  });
  $("#selectRange").append(`
        <option selected value="General">All Range</option>
    `);
}

function setDetailId(index) {
  $("#detailImageDiv").empty();
  $("#productNameDiv").empty();
  $("#productDescriptionDiv").empty();
  $("#productDiv").hide();
  $("#detailImageDiv").append(`
        <img src="./img/Produk/${AllProduct[index].image}" class="figure-img img-fluid">
    `);
  $("#productNameDiv").append(`
        <h3>${AllProduct[index].name}</h3>
        <p>${AllProduct[index].category}</p>
    `);
  $("#productDescriptionDiv").append(`
        <p>${AllProduct[index].description}</p>
    `);
  $("#descriptionDiv").show();
  window.scrollTo(0, 0);
}
