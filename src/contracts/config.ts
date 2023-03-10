export const ONCHAIN_CONTENT_PREFIX = 0x00;
export const SNAKE_PREFIX = 0x00;
export const KEY_LEN = 0x1;
export const KEY_VAL = 0x1;

export const START_EPOCH = 1675339000;
export const END_EPOCH = 1775728000;
export const SNAPSHOT_EPOCH = 1675338000;
export const INACTIVE_ADDRESSES = [
    "Ef_mlXHnufWO3-vvopflR_NpIFMiidvp_xt20Qf8usMBBKzB",
    "Ef8ZvWFCk64ubdT7k9fADlAADZW2oUeE0F__hNAx5vmQ27Ls",
    "Ef9mDsqzIg2i8fdw0Bb7UGafA3Gc1qX5IYjp6AOZwGlfvim2",
    "Ef_OXz_ktGTHClb8arzLt3XEjlJTw9LEYxjGvSJNff79lgM0",
    "Ef_8PSUtKy_U-JZDSNUNqN5cVsn9ORJqS93L6DRM9HbsoScU",
    "Ef_Q2bUhOn4MA6OHPFi_6bmmDyqxfNPe0xZ1NzuVg3iZnc6q",
    "Ef-WNdMyg4WY477TQbcRXXRYaJTxTcsMXCFCaqNsJOx2bdOb",
    "Ef-Mp2amcFWc_WUZLp7u0px-xaFUTIvZ235bbkxeZj_0L3RN",
    "Ef_a5A7jjemg9UIxm8qKDJDO6Ex1y0qIYKHv1y6JV2pf0Pc5",
    "Ef-OlzXDAMGgBWSaGbCh3eddOMKQQ1FxSmlc7UFvyg0FLkaW",
    "Ef8-sWUe-q9lIhqbQ8uEn9zq0si2dYwmVNk7uAglmIzv6HUx",
    "Ef-oPVJM6fGP9OC-PczMUdiKPNfwkUrt4eslgzXXEY0qCH1j",
    "Ef-Op85HIHPW38bRG-cITThNtN7DLMPNXuOcthlLwWIQ4F6h",
    "Ef8Coo1rIKJKBUd8_Op2x9Pn6qKpzK8hiXR36pkAObslsvEQ",
    "Ef-KSYlt0KOJ6vKSo1c837N_9LicTJll2Mg7Hbix7bsvIFR4",
    "Ef9m1EeCVXB32YmziDqnSZvjkzzemdc9G8pCrtPVKfsXPz-L",
    "Ef9mgPTRU2ahxnKtLws-6iB3AmBjD3BYLtAIpqJydaizsqQN",
    "Ef818UKXzeOebz6Sf0_rdq7ZSghPV-ir4hxUVfNNoAj3ueCS",
    "Ef_SjWSzILCgUwq4igDDEE3v3Sf0A0zwO55aWE-LYzLGpN2P",
    "Ef8BtXO9bcTMXjg9bgivKh4lhJmZWQPP6_rb9vfjlTP5FJtM",
    "Ef89xh-uy860-mCcvS8zcAUs8bApmxLGygDLEKjUk5RL-311",
    "Ef_vA6yRfmt2P4UHnxlrQUZFcBnKux8mL2eMqBgpeMFPorr4",
    "Ef8o6AM9sUZ8rOqLFY8PYeaC3gbopZR1BMkE8fcD0r5NnmCi",
    "Ef_fvrd0hBoVJUxoi7wH173Zk8NPiyVvxh5IoYSjEYZbOhsu",
    "Ef9nzj6RBc4mQ6p3ng7mGJ7tp7MbzERhe7obkM9A0wnCCEcf",
    "Ef9rU-_AAnBkHB71TIC3QvUf5LcAsvj0B4IoYzAXLpEFd5CA",
    "Ef9LynHHKgBxY6-l-W_dWN-CtGT2_ji5rN3EzOI-p9zWEfq6",
    "Ef9hMd78gzSiVsK0zz0AHtEja8x1UoB_NDZMjn-l86NQK_2Y",
    "Ef80FNJ5NJO4-0QwlVAWckUZXdk-PfYDexDZ1-ju9SxhF0A6",
    "Ef_fdIbThooPs4_r2DE_Z6ZsWycJdHLnsuKAJHTcbaZaipez",
    "Ef_lva0qEiZhWrrZJl-IJxyCcTQmmTo71fIWyQ31HxJ8NurV",
    "Ef8sMGKypw006AeRYqimLjmY2Ufp-SHk8C0ZJBNgVBlzw_Nr",
    "Ef-xcEX5-C22DE86S7EgbhCN7wGi4rQA35aXcafjOSVVranc",
    "EQCaSCHVak-jIc9ANutTAfHpZNM3YdGky7yaDzsTrg0WhFlm",
    "EQBS9U3AfD15fGmOtRMXQAxcPVBwNuItfLcDni9fkbTyyNX0",
    "EQBiMNL9qNWMAkJHuM0BFneYcuHL17kzS4pswpaEO-NGWrFG",
    "EQDxkhmQvPDtgcNst75JyXre6F1d9HA5RrQkfAm-6EYbebs6",
    "EQBX1DOvSox2jnjN40ZFtUSQhSJMCyEWhBRdRERRSltibBMl",
    "EQAICCoyXV4NKR60SHw4GC0NtHSFOphGw2tRcbVF8vQeq6Ap",
    "EQCjztI_OLd1UTJtSY3o_b8qZxD5sTFoeJHIA_CfQ3Friigx",
    "EQB1m2zzTLcZZzAOxAMQd2Gx0B-WBRLEXwXyU3MUpruZRJf4",
    "EQDMtDMwOotSUowpZ83NfpYJYC_XYvQIqBYcuDUJoFceei3u",
    "EQA03o-0IgFruYFoHot96C_wH9pAKrVZGQBENWHVYfN8d8I6",
    "EQDszxJPOZAX0ztmlbs7eDgPlwr3trm8-nzFfAdmbKhuga26",
    "EQAaJCuCUNANwLdvqVNoiva1U9FHhGXFUDDFg1wX7oGS9otO",
    "EQB4hzviVxD170gIZfsWPGFKfbOB6LCP5YhH7I7fWz7wd18g",
    "EQB3-wgGfQcbppo-XnXsvzwr7yHghQH07p6fMC_ARdIijxA_",
    "EQCXNpbVkuKxTxPbc4GWngSrrBjhRD0TQSXqxpW_g-WhCiPw",
    "EQAzb9EP1RAHx8Y52ESUcW-sbRnraqDtToI7Lcwv9zpONZNC",
    "EQAjte7qkSkMDTIwX0zqg2RImbUE2hBhr27uyGsoSIKZXOT4",
    "EQBcJ0SsxJ8ViYQr0n1eKYkNfKzNCO1UQu0chdC3sC9CMh2t",
    "EQBdfnPzGbbK38eUHUb1MHZCdritWDMbEj-fjPdRivdruIoW",
    "EQDCg93lUVxmlCEks5kL8jTFcqg8lElfAi8dSee8j2jFDGWg",
    "EQCutEpbKJaulevOYXQPqlmgiMgHDU6C6X7KRxpFyzPf0bTY",
    "EQCBMyAieemf3vF3umY0lCaQxLhwvbTFuL8eQxPYrpeZ8O4O",
    "EQCKgo9zOKIHeEPm_BySBsDi61vJEsw36eYdSfEkAdEJxdaB",
    "EQDOgRE2sbmPZpl9lA6Y3ixSPFD8CF_rpLl6N9n6i0KhLyGZ",
    "EQAJJ6_YRxH-pjeUxhne0iiMdHmz7BbJJ_A2DtdmA_bfBvN1",
    "EQAupAX6TMABnJukf_XPXNih_T1ZgABjoxtAcOPcA710IQdd",
    "EQBtSs0SU4PCQ8H4q8QqoK0LPwJLkcJywLz9WgkZXl_T61wH",
    "Ef9QzuurnRKGkdBkiFcVMahY0NeDy9RISLLmLKYJnp0D9Scf",
    "Ef9ew2pT3FXS-m8wRHnef1Sph38Dv2N69_SSWDq1L7c98VDJ",
    "EQDoznX6OGodrwCkiYUet0QQhKqD5vs_XVoWkw9PWIrc4nzE",
    "EQDLNQOxEXRY6JCLpxQkoHjsZIvlfBcGxmhdpxcxw7hd02cb",
    "EQAi5p9hauyrISo6oTP1lvtDRcpR-8DXVfwFoLtSXCzUK4JY",
    "EQBJUlbzK7STK6R42LcGFxLrudKxMuW5gprGABcmSDhDoZ0k",
    "EQBy4Sl0V6-Os8_nbgUTL4kcw4sGcUE6r1146EhQlq4j0mzN",
    "EQCSV9JuGqTFvxhA8bZ3fs9LoO-b6B3fjom0kGwNvrVD4t2N",
    "EQA8_W4HMYysUZnzKyRAugWx0wkPljV6gtx_s-fdYGcNAP2f",
    "EQC0JmTypqySHVMVJMHWspb3xrs2Lrdy4eJ-M7QxpbS4cLju",
    "EQAA7RyNJcR3Tg7z_BwXb81ePDvrLytQanO62TA66mSDEwjs",
    "EQBZ_8qAHKZNYwc1_QlTThsvMfUlqebaBwg1VMvHOLj0hm9_",
    "EQDY5GgwQeuSZwBH72e0OQCPQerqAsZRPRx6CVTxOb2N-3In",
    "EQAjtRP1kV8NS2oo6N67G1wGOOWMMJdyyu31WoOKcKYl3Lgr",
    "EQAcfANH7PG2eeTdX5Vr2ZUebxCfwJyzBCE4oriUVRU3jEor",
    "EQAkvVQTtPmWYY64SLI-DKS6oBbQQ0JrGOyLh93NmrYPQdOB",
    "EQBfP6HoHb_zqc5U3Lh8_pNMt0R7Iwsxu858d0dqmeARhwBI",
    "EQAMy2lPdHZUPm695Z-bh0Z1dcta4xXX7fl6dlc2SXOliK0A",
    "EQCBeXqt7IiwIofZ-rYjz6gSeRLjFjLdFQf_uRrXnZauK7Cx",
    "EQDrZi36KjGcO-5Z-6AJ9Ap2vgZKf7JzcMR4EdjE5f7qlS5P",
    "EQDT34GDWiciYo62uEboS8sj3hlKUXAWYcM3Urc0NjCMg1Kx",
    "Ef_tLLoLmIvaoSxKX1sXflHZO1THzS-RUVIUux-gT67ykN7H",
    "EQAtlHRZMyF-8PHRySu5Vie0C2V_RhZ5R1b5C4tvnTti6q5E",
    "EQDWtv-LafzQrb1OIpWcDKHo7Yvt2WpQitlM23-2kksMrnVs",
    "EQBWfMrvKZSEOHk8v_-kserBpiJ2rezKbuEhYLfZGqiX6VCb",
    "EQAv__KLm50Zz9iN6n2BF2eGtB7Kwjfe1Agy3lkjd9FSJii5",
    "EQCe9YMxZTmVK30baJwkM4w0hc60b-Jf_eExbPaIvkUOpEjN",
    "EQC6o8UN21TLvt6j7G4uiS1PB3LB8O_Md70Zmk9uicRjPt0f",
    "EQCCCJHgAcs-wQzgf_9IPKdknw_ej0Z-Q-n3BtSEKi0hIjHY",
    "EQDfuwGozZBw1u6vFInSjUQJ5ktzSzVfIE6ONATQPFvvPqL7",
    "EQBC2M3Dl1iH8pB6kg7d5vdh2nM_10aFg-ReMstAEPxNKCO_",
    "EQDrBjWxN_Zme5auRFn5qKNZtof6rlkweSCGf9iz60JmGsj5",
    "EQDx2vkLURpJY4xeoY4jBNI-y55zIyZA4epmAWob90oLn8vk",
    "EQBv-0zsN9j-Lxs1EvbGG0fMwbeeqbWlxTzyjV4LE-0uJfNs",
    "EQAUzE-Nef80O9dLZy91HfPiOb6EEQ8YqyWKyIU-KeaYLNUi",
    "EQD-nhrinjv0B4LTgr0dRHTHwH1MOsgGhKBXJZd7vESMZUf1",
    "EQAVD3Fni9I6j8XeSIl-wAGBEhqhame6OtAY0GScKT0D9X6f",
    "EQC6ACq3VANZjqfRBy7JMHkpLwqQ9qyYJsCIGx1mYbQgxaKw",
    "EQCIJLNFIko5CvpKn9oAkrDgLocDOoD4vwmHxNx_fsG_LkwW",
    "EQCe4AYIBce1pAk2qJJPSs1OzyZRlKjkfq8zuC8D7erv6DUP",
    "EQCtrtTXEAoSpoERmiqOnICe9LHxn2N89N4BH9qdHlrG-U0i",
    "EQBBlraAps0OZaB9Q8ePQn2wVAaL1G411A-dNppyWe3X3GIT",
    "EQBiASqUqaVizrozLRbszkWC2kETbkhpO2qniDVDPPg2_0W8",
    "EQBu2Q1EO8gIoNA1qoGWnHUudKfmqlKEDTQE-DxN-_4sdg14",
    "EQA5bvxWd5-q2vJUVqR9AlbEIfdFysLR0PXGgVlBf8x5hWuF",
    "EQBguMSHjFv5bfoOdshr3ruS9ymSZzhRKMovoNrxGxZXvmee",
    "EQAxL0oF1-zNgimPKthbDnYS4xj94rHtfNRN7_Pd1r2LNNv3",
    "EQANX1uRKGZfyPIwEaIXrR0ZOqadct5q10dvKxWIxx7SQqzW",
    "EQBitdFDoU5DWSjfKq7AsO29RIwAnBzzvcVVSn5ekQoB9Liv",
    "EQBgbux7VSjqJHP7ByRK1q4QuVZbpSCesNgvz5qad3lfXX_B",
    "EQDisBd8U7M3CEOZ8gcWCdetdmJi3AI31zIT5qBwOdmUbsxY",
    "EQAZpn_eynVlf7Ii2d6jP_p1URPrdF9F3S7DiudQyelkjzwE",
    "EQDE0HBgfkOiqHezLtExBGTvOs8eitthHQosBjW3BmDy1y2K",
    "EQDyT36zktBN9PVWvZ1joRxhIfEUgCPt4F2isa-enUA_d6CP",
    "EQDSMUGwt25IQd3_yHjI03F71G8Kp2GMaMEv2TiWoTKbsyRH",
    "EQAgK1EcrvEuL9sCtoj3cNhVNOuf3lo5GIPE2gn1fwZZYB3j",
    "EQCDKqL5w_6MD-Z7AOButu-uR-ZJTsgNU1fu464hn9grY81U",
    "EQB1aVMyFBhnlYXmQjsma0S63kvxKU7ccZKFNCFTwX7ASPv4",
    "EQBbjrXHoxDyh1ZYGBdBoQgLaScxW6pZR1hEhJC8BqF-5Kgq",
    "EQC-QeZ13QP0lszxNKt380fCWuaV94vwC_bfuqmrlg1_fJPA",
    "EQAiUwpF27vXCngqNhf_TQ5E_06ah0G4zuSrnfU7CLLaht5H",
    "EQBqiVjmhe2iVGmgOSDO1FGjSiz_AMtb1w7lLEiP4XIF_SFy",
    "EQDmwvaK2d_SbaPdpOM60effPWeKsksgDVwFPEyxuftM396K",
    "EQDWtPZZgF7wvIMUHZQojuD3utiuivsW7WslRJ33dgv-5yc8",
    "EQBj8QLF2QLU0KDMCVdu568zQshbptWlNX28oHhTBbmF_R3b",
    "EQAYbtDCZEGRAOXaB6WwVqFzYTd1zZgyp15BIuy9n029k1_h",
    "EQAA7z0JI0JKqbN-1uENKz9JrxIO5ZRY-ehMeg9fPncx50Ck",
    "EQBVUHRoCq6coQYUwOAhGSoAmQ6Mpm7dFlDYon6HMgWV8Ftr",
    "EQCTdvDCf0bA5dOPI1-44tB2ZfNcMGiklzvg27TovgDEqM6E",
    "EQBDBKE5WGKIlnoi3OOzw7vkKKIX55eWjPvgxJWwek8AyL2J",
    "EQAvCSyLCo21GrqLAifdov4WkOxuGQCjMRxgF1cXSaNzLHZe",
    "EQBsChLfhZbaR23gJaR8SevIXowe2uUtIQCzjucuA9iu3--x",
    "EQDs64JSInV0A3K_MqPab7qD2MaJkNBKq5txx3RQe5Emyci8",
    "EQAc72Ghri2XD_iI8o7m00YNF-ettab7VC2p8UU460BLIU5a",
    "EQBqA1yiO0fD4aXMsk4hQBO4rWfzx2dNpj3U1sdj21Gy6F5k",
    "EQDcB-mY1VO0VjsCDe5i0-nTgpiywiu4UumAzH5oc1Sik_ip",
    "EQDHBUIhEdUCUJ1996-SEj0WiraaE4J6YLJOuLKLpK8ugelH",
    "EQCF3YE-zgsCUKNDOO-IHcKgaNuDbhbT2mPDp6CEoA_lGwYC",
    "EQBo7oFeffZkEzjcm2o9ydsfanc6FhbA5uddwGZcvstFmDTE",
    "EQCGcN4b1k2-TOrfAMOka3RxvlwccVDSK0cPezlHZgfLx3KC",
    "Ef8GK7QPES_6rEX1QgnJoYfclfmmxLB7JkZkgyMjOY4imfPz",
    "Ef9OK0CHqoBidcEUJHx4naV3TtgmUv1oEhGpt3DFLGnncqcD",
    "Ef9wfPnv8TnJ5_g98i_EhpBH_0lwMd6UUh_y391Awus8RnIv",
    "Ef_a7FubUfI8fUPnAIZvIRKadC9GG6zpjLLE6PXVj-de5m2m",
    "Ef-d07-2cMJ_FEVEVVyAMFe49aBuRnhxzFCxr7189l-C2wuT",
    "EQA0VwItUqcgloSsOo5jOBn0kmtZ38DYidNQ4SFR9jNU9uQu",
    "EQAbmML93xvUT-iBDJrOfhiRGSs3vOczEy9DJAbuCb7aU5IV",
    "EQAgAUSlf9zmQ3bmHet5lb6n9h1JC0ISF5PMH7orZ8v7lZDs",
    "EQAHaf_eo9gmHLiERpH5Y5ebr_z4pX4NysAmPMcHa9SXap09",
    "EQAP7Iz5zvzg42Omrjvn2KAGCkb5H6tYBtj6p-GsbIpMKYYJ",
    "EQAyJ64Df7Vfb8_jmlGnsZByGAdCsEWA_FfWXyVEU5d6CtuO",
    "EQB457L2Ru7eCQ8NhgStoHxvewVSsKCDhqyTcL47xQnWaafk",
    "EQB71qzgehIXoMRj58vAWaHnNAi6UXEU5Ce942dJqf4Ha3NS",
    "EQB7sAC-hRkGgk2w3RMBlCfNkw6VTC6Da-GRmVsXKH4IWWtW",
    "EQBa2970Z1EmGf-3R-Bh7t3WmRMHFrYB-JdxZ5FioTUrfNUf",
    "EQBdCvFB4bA7PAP0VXnTs784TO_4CoWLb1QqRdyr0orLAl51",
    "EQBf4xFSy-MEXcwUtq1bD_FKDWzSLJ4t5gHhYKusM1LVwa5J",
    "EQBmd_oR88TrfAGcKrMn44T3wBnbh3TWVQWr8rVq0bYTnR7N",
    "EQBnaWOnwN_mqcDEF3aRDLvLPLhV3_utuZrX3IjLdHYeC7uB",
    "EQBsnM5k_sOznQr1WdE94HfCWDSeLK6cBYi5xRxAp0kXoHTe",
    "EQBSzcGQ3b7rhszsLSWkdZkAofRtRe9Ft4li0OUGko6jnvMh",
    "EQBwd90d0x26s3wOdOYCVw-z2gbR7hQJmCQ8U7z8Vp5jLGLP",
    "EQBZODk_N12gpWInTpRULGk1C4s_cwkDL92tclXQyvAiz4mR",
    "EQC1Dm_DvuCGRFFqrZ0RkPCaTJDAaHKWcpP3aN3f_TGJ1ZNC",
    "EQC5QWZHVFsnNc3YPRYafUErFg_i0slwoSiyTojBd61Tagj7",
    "EQC7bGLqI2XPdKGJzNlkPnOnB3Ykw0QQ9lIMZCZW5GWvptyt",
    "EQCFOgDeG2tb_xMRJ5TQDYq6BPlISm9KSxOjvGwN32mJ-0Mj",
    "EQCHHYVRvW7EqtBZjteGrvzrbs2liZiAJUyevROZZ2hV3y7c",
    "EQCHOHm0KaZGLqDPUZRHdLYQO-nsHHrLaEmrfQ95hd8MU-Bh",
    "EQCPp9qFewm5kYWBnO7S4gl4_y-NPuGZc75ZhJ2T8crkK5YR",
    "EQCpThG9OfYHp77yeaUS_95mhHPVgqverIO50RONyswWAkRN",
    "EQCsLpDeHB2qpRbmsCb_0xmsYVNx1NgeYrvHGT1TDrHkDgL4",
    "EQCTQ8kPwyX92r48gCIL_pLN_RcQT9ghZygnmDTYkOkuW_j5",
    "EQCTrFRSHt-tfk7WxK9ZHQmqLcgxXxTK7wGfCEbqgY2W9Mcx",
    "EQCv28y49GdaLncoclv0ISdDlMUY_cxDPGNWFCPT8t4GuqUJ",
    "EQCVL-k6deDR56Z8pcb0Btg0lGfaivOGfdDCD1vvyRsyL9vS",
    "EQD6t2dXDjZxF1DqunKF-8dEWivJdliY_0FYiCXnthuqnDCa",
    "EQDE98XNzXiPq7VnbJJ2M4-Ht3tX_OWR0xUTTnDC8NObLmyU",
    "EQDfeRDE1TDhwt478CDR0Q7MDwqcTUhfjqyTT59mgoAaF6f7",
    "EQDijcEyUKa-QgCbeGlggQk1uBtt2ZRHyW4Y4gB4R6MN6RLW",
    "EQDOtFOt41skbjBkZF89oYXpoDECjlxIzD-ShWAOYyzuxqLA",
    "EQDuJKSFWU7AYqH6KLFfAbYvMuz346eWmJvG6_2NYE42_B4T",
    "EQDwGu4vFv1e3wn8min_iy7OPJXegOYTFQ5bZFZ5a5ZPiBpX",
    "EQC4G2ph6AS_mD_-cIv4aIYm1z5jAgCW_TTDEr72ygXOP2X-",
    "EQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM9c",
];
