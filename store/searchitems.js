import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: [
    {
      category: "Vegetables",
      items: [
        {
          name: "Artichoke",

          url: "https://drive.google.com/uc?export=view&id=13RF1Gi5nHWoIQO6u1lJmg7SQtSccZtEh",
        },
        {
          name: "Asparagus",
          url: "https://drive.google.com/uc?export=view&id=1QlbpUmg0syLVyWN1R6T3CXK2gvz2SCH5",
        },
        {
          name: "Beetroot",
          url: "https://drive.google.com/uc?export=view&id=1lqj94IEGKmcA96nQcAwEejiv3jLZU4Hu",
        },
        {
          name: "Brussel sprouts",
          url: "https://drive.google.com/uc?export=view&id=1wEPL_ruItJWeL7YL2P5dSI-YEYMj5Itf",
        },
        {
          name: "Broccoli",
          url: "https://drive.google.com/uc?export=view&id=1IZgnmKiMvO3SOrjDgIOL4w67OHZy1HkP",
        },
        {
          name: "Cabbage",
          url: "https://drive.google.com/uc?export=view&id=1k1vj3rTtDdyNlt3qBXeJjNl-kwvaTX6p",
        },
        {
          name: "Carrot",
          url: "https://drive.google.com/uc?export=view&id=1-T2ugeZtVgdjzopHlJkqs5X0Unfa-krP",
        },
        {
          name: "Cauliflower",
          url: "https://drive.google.com/uc?export=view&id=1w_Iu571_5ptUArKLWFJubVC1-5LaMv9E",
        },
        {
          name: "Celery",
          url: "https://drive.google.com/uc?export=view&id=159srJNLhAKf3_pPPlfsU6_hKNBERMjst",
        },
        {
          name: "Corn",
          url: "https://drive.google.com/uc?export=view&id=1KiQP_PuLt_2zfSNA7ucfvt72NV0V6wwQ",
        },
        {
          name: "Cucumber",
          url: "https://drive.google.com/uc?export=view&id=1e74Nshck48e5nSt95Fbc-q9Fg6JVdl-W",
        },
        {
          name: "Green pepper",
          url: "https://drive.google.com/uc?export=view&id=1mwvFbXvu5w6YkDnS1UtUZ7BRfLXDCwvh",
        },
        {
          name: "Leek",
          url: "https://drive.google.com/uc?export=view&id=1PnLBH2d-J_ocPj6n3zcyDS4q9wfFiSoU",
        },
        {
          name: "Lettuce",
          url: "https://drive.google.com/uc?export=view&id=1DcFv5lmu3b_cBkQKVG_mnuvZbcA6EZax",
        },
        {
          name: "Mushrooms",
          url: "https://drive.google.com/uc?export=view&id=1G1oN_5Km1YGgkQXMUZcWxYjckGOTHdxy",
        },
        {
          name: "Onion",
          url: "https://drive.google.com/uc?export=view&id=1XcUBEf9-k0ZXksKgGIbpn5VhrhhR3EQU",
        },
        {
          name: "Potato",
          url: "https://drive.google.com/uc?export=view&id=13BY_HkGB09PRUNDjyu3AW2GAr1zgxtLK",
        },
        {
          name: "Pumpkin",
          url: "https://drive.google.com/uc?export=view&id=17IxnkmGtdQFvQPAs2RLFLK1G4UWVbOIA",
        },
        {
          name: "Radish",
          url: "https://drive.google.com/uc?export=view&id=1zu2IOx1nbYJD5k_aCY4wSfAE2zEmM0ln",
        },
        {
          name: "Red pepper",
          url: "https://drive.google.com/uc?export=view&id=17CvOawIuqmYnuyA7aJ6i0mSg5o4lU_OW",
        },
        {
          name: "Sweet potato",
          url: "https://drive.google.com/uc?export=view&id=1Q2phKsckLyIbpopIS4gy4ipEJuBEF5xe",
        },
        {
          name: "Tomato",
          url: "https://drive.google.com/uc?export=view&id=16IDf_Y_Wkui8njeSLtEsfSmrGuEWSIIc",
        },
        {
          name: "Zucchini",
          url: "https://drive.google.com/uc?export=view&id=13oKEYCrVyKF1ipi6_-X7RkCtAi8SxcCp",
        },
      ],
    },
    {
      category: "Fruits",
      items: [
        {
          name: "Apple",
          url: "https://drive.google.com/uc?export=view&id=10Z5ybwSCSLjzgoOB7HqEtyLWrxWZLsQd",
        },
        {
          name: "Apricot",
          url: "https://drive.google.com/uc?export=view&id=1YuNnPuDzoM7prshUSRCSmqcpwVUwpMvD",
        },
        {
          name: "Avocado",
          url: "https://drive.google.com/uc?export=view&id=1tWx_Z0SeCoR_N4wlAwbE0G0-eszMWlsi",
        },
        {
          name: "Banana",
          url: "https://drive.google.com/uc?export=view&id=1ygrneI3K_OlQJekm6l7REukeVsuP21gw",
        },
        {
          name: "Blackberry",
          url: "https://drive.google.com/uc?export=view&id=1wFbYH6gDao_FtIATHZWOSM3d2vnREf6f",
        },
        {
          name: "Blackcurrant",
          url: "https://drive.google.com/uc?export=view&id=1fe5e2tSQQeB3mTZGhr35hcsNEQa1CBvu",
        },
        {
          name: "Boysenberry",
          url: "https://drive.google.com/uc?export=view&id=1SsrQZ_t4z3toQwR5GhTl4dJbvOExn--s",
        },
        {
          name: "Cherry",
          url: "https://drive.google.com/uc?export=view&id=1AZlg9GCQGawq2GNDak_v1rozlZcdv7ms",
        },
        {
          name: "Coconut",
          url: "https://drive.google.com/uc?export=view&id=1hQhEyACIFsllzJ6CWJe1wpt6mjmTcpIX",
        },
        {
          name: "Fig",
          url: "https://drive.google.com/uc?export=view&id=1jawByj5YRr4IVGUYCVn_kng4u0OMgASN",
        },
        {
          name: "Grape",
          url: "https://drive.google.com/uc?export=view&id=1EbDErp4MfiZsUd8EjziNysx9dJb_R3Ig",
        },
        {
          name: "Grapefruit",
          url: "https://drive.google.com/uc?export=view&id=1mZVlTwv0b4g-L_LkN-XJEe0WPIzznO4z",
        },
        {
          name: "Kiwifruit",
          url: "https://drive.google.com/uc?export=view&id=1CCsgAJ1CAhRY6eMiRu1s1jDkuR3RFdy4",
        },
        {
          name: "Lemon",
          url: "https://drive.google.com/uc?export=view&id=1qfYIYj0UezbA6tQ6XL4kwLJ9mB1mssja",
        },
        {
          name: "Lime",
          url: "https://drive.google.com/uc?export=view&id=1w0MuWcCa2OUtEt3xSGP5YuDq5LNdxVCA",
        },
        {
          name: "Lychee",
          url: "https://drive.google.com/uc?export=view&id=1B-BQrQKkSCvBX27Uo4Bbrl2X2wxRYR4Q",
        },
        {
          name: "Mandarin",
          url: "https://drive.google.com/uc?export=view&id=1iq4FS00p73ALCXVl72eEYQPgJlVWxOMN",
        },
        {
          name: "Mango",
          url: "https://drive.google.com/uc?export=view&id=1Wuh-ky0Aqu74MewSf0_nFR6HYEssXYqJ",
        },
        {
          name: "Melon",
          url: "https://drive.google.com/uc?export=view&id=1s37vKlqgzRGJ_mKpjBsXtJ8iOx_mlWCb",
        },
        {
          name: "Nectarine",
          url: "https://drive.google.com/uc?export=view&id=1S_Xso5vyYUSui4AQ-6nbVU1HiYOkZKTQ",
        },
        {
          name: "Orange",
          url: "https://drive.google.com/uc?export=view&id=1YoC6biB--l7m1lFVZ2EiR_HqcYW4XYmD",
        },
        {
          name: "Papaya",
          url: "https://drive.google.com/uc?export=view&id=12C_7biqKKjNr998TV3VWm-ZLFiXNnAgT",
        },
        {
          name: "Passion fruit",
          url: "https://drive.google.com/uc?export=view&id=1q5xiwB04gPBFHyn1T4HQIIHhvF3gTlft",
        },
        {
          name: "Peach",
          url: "https://drive.google.com/uc?export=view&id=17yCMOj24jiufDu-sBlDmNZQpjeg-SypN",
        },
        {
          name: "Pear",
          url: "https://drive.google.com/uc?export=view&id=1NzU51HJ2N4wYqrRW1UnSFYIsANcJlScT",
        },
        {
          name: "Pineapple",
          url: "https://drive.google.com/uc?export=view&id=1PHvWso6F8DxnxSry20qddQ-ydWf3IYz8",
        },
        {
          name: "Plum",
          url: "https://drive.google.com/uc?export=view&id=1B_ueymnjZE1AQJ1WhlN2GNL-I7xwQ4ot",
        },
        {
          name: "Pomegranate",
          url: "https://drive.google.com/uc?export=view&id=1z5OyaXerM6QM2_I5eDflH9Nd7b74hQ_r",
        },
        {
          name: "Quince",
          url: "https://drive.google.com/uc?export=view&id=134lYlD7lr5eJZnsn85F5qO-jyNzLN4t2",
        },
        {
          name: "Raspberry",
          url: "https://drive.google.com/uc?export=view&id=1eFIZaXB1UQpDGeXPaFyvr4TAYSrBVenI",
        },
        {
          name: "Strawberry",
          url: "https://drive.google.com/uc?export=view&id=1DG1PfCm94_oSispSJvGi_oh8Yi4Qx12L",
        },
        {
          name: "Watermelon",
          url: "https://drive.google.com/uc?export=view&id=1iyZRzuPuQb65Bj-SJw7tOICRrzDOGKOA",
        },
      ],
    },
    {
      category: "Dishes and Foods",
      items: [
        {
          name: "Arepas",
          url: "https://drive.google.com/uc?export=view&id=1wReam-dm179EN1rja8SglkDGyjZyhdOw",
        },
        {
          name: "BBQ",
          url: "https://drive.google.com/uc?export=view&id=11pbZYGDwkFboLs01a63cyAZBazHKWc-D",
        },
        {
          name: "Bunny chow",
          url: "https://drive.google.com/uc?export=view&id=1cl2tLWfIENaL80XtuEOERJmJPmWUIQZO",
        },
        {
          name: "Cake",
          url: "https://drive.google.com/uc?export=view&id=1o5zpnWYJ58zuEByOvKGW-wK4vCWzlJnn",
        },
        {
          name: "Chili",
          url: "https://drive.google.com/uc?export=view&id=1eVPfZGmzFv8TRdAu-nnWhjhPctPfsLBx",
        },
        {
          name: "Chicken",
          url: "https://drive.google.com/uc?export=view&id=1Fe0LzntxWoGYYi_cLFG2YpFCLRTzZOYp",
        },
        {
          name: "Chips",
          url: "https://drive.google.com/uc?export=view&id=1nnmmb7hh0IX-PHtt_Am6DjerUFPD5gnb",
        },
        {
          name: "Chocolate",
          url: "https://drive.google.com/uc?export=view&id=1BEM48wUhJEhjT6ZybR7-bIyhaAVQU3o6",
        },
        {
          name: "Croissant",
          url: "https://drive.google.com/uc?export=view&id=1GKtWD6o948rAFt2HC6H8fdwyauYQB5oH",
        },
        {
          name: "Curry",
          url: "https://drive.google.com/uc?export=view&id=1j1Go2cdzG0v_D6XeT7Te-WJopsTP7ze5",
        },
        {
          name: "Donuts",
          url: "https://drive.google.com/uc?export=view&id=1yBsANlc32BK1xUrwe-My8pqupfPTrnK-",
        },
        {
          name: "Fajitas",
          url: "https://drive.google.com/uc?export=view&id=10C3SFJxoKQ3h_7eONTv6ongpDce1xUOW",
        },
        {
          name: "Fries",
          url: "https://drive.google.com/uc?export=view&id=1GQQUOpWJVNXIkraz2uCCAFG4Ip-ISYD2",
        },
        {
          name: "ham",
          url: "https://drive.google.com/uc?export=view&id=1vF66w2BiJNjRXS_4DdnSUdgqg58v58g2",
        },
        {
          name: "Hamburger",
          url: "https://drive.google.com/uc?export=view&id=1qvojjSlOI261_nZBAw78i8fl48wcYyk5",
        },
        {
          name: "Hummus",
          url: "https://drive.google.com/uc?export=view&id=1i49eyfrI2zhYfNj_Mgq0fs--0R4t5CEk",
        },
        {
          name: "Ice cream",
          url: "https://drive.google.com/uc?export=view&id=14Ad0RotFa9zXP099hsNI21m5KrrH7AwN",
        },
        {
          name: "Kebab",
          url: "https://drive.google.com/uc?export=view&id=156rFaVHO5iXgxXjDZd54l3IIAk5mbsyh",
        },
        {
          name: "Ketchup",
          url: "https://drive.google.com/uc?export=view&id=1OOH7DqxLu65VKiJwFa6EtlLeTzkP-P7G",
        },
        {
          name: "Lasagna",
          url: "https://drive.google.com/uc?export=view&id=1einmClAUbAHwB8TwWZUXZ_MkIgzWYoqb",
        },
        {
          name: "Lobster",
          url: "https://drive.google.com/uc?export=view&id=1ABF3YcSeKhf50XUm5d9ovFQDDrEl52Io",
        },
        {
          name: "Maple syrup",
          url: "https://drive.google.com/uc?export=view&id=1orLOfUPKhZGKkx0LohC0JmRQjjIFq2NG",
        },
        {
          name: "Marzipan",
          url: "https://drive.google.com/uc?export=view&id=176JP4xw0G1K66SAsNdvXm72F9psqq9xN",
        },
        {
          name: "Masala",
          url: "https://drive.google.com/uc?export=view&id=11a5L6S91H2j7uARG0YW6Zvl2mNObp969",
        },
        {
          name: "Pierogi",
          url: "https://drive.google.com/uc?export=view&id=1mm2b5BwJ38bKmBFXcE14_A3XQTaSZWbp",
        },
        {
          name: "Pie",
          url: "https://drive.google.com/uc?export=view&id=1Ylnxf44jcQOY3KLb9bbqEEa4WPScqGSn",
        },
        {
          name: "Pizza",
          url: "https://drive.google.com/uc?export=view&id=1sKmeIhfpTMC725FCSN01DkmZ_TLzVTZs",
        },
        {
          name: "Poke",
          url: "https://drive.google.com/uc?export=view&id=1w4CQjA91vhxWGT9UCFVMFh6amdJLeN1O",
        },
        {
          name: "Popcorn",
          url: "https://drive.google.com/uc?export=view&id=1le3HlPMVPsJVLvWDzalQg6Rdx_e9Dmmu",
        },
        {
          name: "Pudding",
          url: "https://drive.google.com/uc?export=view&id=1hGkQL8BEYIuRZveoXRt9EO2btmSOx9mg",
        },
        {
          name: "Rendang",
          url: "https://drive.google.com/uc?export=view&id=1bTDPdR-lbE5pWlJPrHuPwluSegvdTSw4",
        },
        {
          name: "Salad",
          url: "https://drive.google.com/uc?export=view&id=1SszemvN-z23IeXPV77tM7l7Nsv1aRfR0",
        },
        {
          name: "Sausage",
          url: "https://drive.google.com/uc?export=view&id=1hzbDmgqbIqB6u9K2_QuRUKnG48ZvGc-x",
        },
        {
          name: "Seafood",
          url: "https://drive.google.com/uc?export=view&id=1Zh91SmbWV4wFuRB00hVC36kQZq120nn9",
        },
        {
          name: "Som Tam",
          url: "https://drive.google.com/uc?export=view&id=1OkTtpXojf_euMU-i92_Np0Jwu1i6pG33",
        },
        {
          name: "Sushi",
          url: "https://drive.google.com/uc?export=view&id=10Z1uDA5p4cpuzcJRM6EOlmQO2oPgvd5Z",
        },
        {
          name: "Tacos",
          url: "https://drive.google.com/uc?export=view&id=1HLIQ8SOFw5RA1A9EKUVSjsV_MQT3emlY",
        },
        {
          name: "Tofu",
          url: "https://drive.google.com/uc?export=view&id=1f1pl_8r6Cc3WK7IINNRd9atJVg9danj2",
        },
      ],
    },
    {
      category: "Herbs and Species",
      items: [
        {
          name: "Cinnamon",
          url: "https://drive.google.com/uc?export=view&id=1yGeLky99oDYRfuuCCf2BVhuiVU12Ehe0",
        },
        {
          name: "Coriander",
          url: "https://drive.google.com/uc?export=view&id=1gGjrfQr44ihxQrcElQDoGXZwUKXYz5X4",
        },
        {
          name: "Dill",
          url: "https://drive.google.com/uc?export=view&id=1TbDOelOaAIYMD4EF1K3WEmMjFmQLBEHd",
        },
        {
          name: "Garlic",
          url: "https://drive.google.com/uc?export=view&id=1TqIlPjAu0fKtZ7kBLh-YF0LgvAhvwM__",
        },
        {
          name: "Oregano",
          url: "https://drive.google.com/uc?export=view&id=1G8YZ_d1lKam0xyKw3M-i3sD7ptM4hR0L",
        },
        {
          name: "Parsley",
          url: "https://drive.google.com/uc?export=view&id=1UuJvpcYwTjHjZzuiKQgFot5cEBMgxHsa",
        },
        {
          name: "Rosemary",
          url: "https://drive.google.com/uc?export=view&id=17AezFnQeZkUzRnKqaDZSCRrG2bk9Ll8A",
        },
        {
          name: "Saffron",
          url: "https://drive.google.com/uc?export=view&id=1SmQy53L3j7bfJY8GRW7aYxn1lqZgrKk7",
        },
      ],
    },
    {
      category: "Legumes and Beans",
      items: [
        {
          name: "Green bean",
          url: "https://drive.google.com/uc?export=view&id=1uZ8t-5DtrGCj1BR3sPWtE2aQVyDQvQoc",
        },
        {
          name: "BeanS",
          url: "https://drive.google.com/uc?export=view&id=1JDgEoAmX4vHyRP7dow1a6VlNYIM51qpa",
        },
        {
          name: "chickpea",
          url: "https://drive.google.com/uc?export=view&id=1jeiO5OHMQZJD3u_DxQ52SRM4fG7lAfR-",
        },
        {
          name: "Lentil",
          url: "https://drive.google.com/uc?export=view&id=1WqIVUoJmQLNiSplTQYK10Z-UpV6NliBk",
        },
      ],
    },
    {
      category: "Meat and Poultry",
      items: [
        {
          name: "Bacon",
          url: "https://drive.google.com/uc?export=view&id=1F2-5oNtC6TN1CPL5JFd17lAssroWm_t9",
        },
        {
          name: "Beef",
          url: "https://drive.google.com/uc?export=view&id=1Jt0Ny_XQ-zdgPUYmxFqdc1JZRBxXBlK1",
        },
        {
          name: "Crab",
          url: "https://drive.google.com/uc?export=view&id=1fRxGjzLFux-RaN0w2XjklMA-tWEEhx55",
        },
        {
          name: "Fish",
          url: "https://drive.google.com/uc?export=view&id=1-hPyZQv92DQJ1pRQoWP5J-RfAO-OOkhn",
        },
        {
          name: "Goat",
          url: "https://drive.google.com/uc?export=view&id=1MJaU_on2_XythM-KxCnSmH-vXTI60vYp",
        },
        {
          name: "Ham",
          url: "https://drive.google.com/uc?export=view&id=1QPFw0F_Cb74UUW9q66_GNgjk5gwNrODv",
        },
        {
          name: "Pepperoni",
          url: "https://drive.google.com/uc?export=view&id=1c39GgKz8T-VKHHuAy-HH29_3yqhNMwkQ",
        },
        {
          name: "Ribs",
          url: "https://drive.google.com/uc?export=view&id=1XN6ErDx30U1NO-qpqd96dCHgHZIkTGdG",
        },
        {
          name: "Salami",
          url: "https://drive.google.com/uc?export=view&id=1Fbn8OT40MXbsGQIay6mRrMud3ljq2r94",
        },
        {
          name: "Turkey",
          url: "https://drive.google.com/uc?export=view&id=1HOJdjRUi7zhoPxbHkHJV7Nk-IrtliCgF",
        },
      ],
    },
  ],
};
const searchitems = createSlice({
  name: "searchitems",
  initialState,
  reducers: {
    loadsearchitems(state, action) {
      state.data = action.payload;
    },
  },
});

export const searchitemsActions = searchitems.actions;
export default searchitems.reducer;
