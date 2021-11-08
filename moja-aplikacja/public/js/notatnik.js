const columns = [
  { field: "month", headerName: "Month", width: 150 },
  {
    field: "bccr_bcm2_0",
    headerName: "bccr_bcm2_0",
    width: 150,
    editable: true,
  },
  {
    field: "cccma_cgcm3_1",
    headerName: "cccma_cgcm3_1",
    width: 150,
    editable: true,
  },
  {
    field: "cnrm_cm3",
    headerName: "cnrm_cm3",
    width: 150,
    editable: true,
  },
];
const rows = [
  {
    month: "January",
    bccr_bcm2_0: 12.234,
    cccma_cgcm3_1: 23.43,
    cnrm_cm3: 35.56,
  },
  {
    month: "February",
    bccr_bcm2_0: 12.234,
    cccma_cgcm3_1: 23.43,
    cnrm_cm3: 35.56,
  },
  {
    month: "March",
    bccr_bcm2_0: 12.234,
    cccma_cgcm3_1: 23.43,
    cnrm_cm3: 35.56,
  },
  { month: 4, bccr_bcm2_0: "Stark", cccma_cgcm3_1: "Arya", cnrm_cm3: 16 },
  {
    month: 5,
    bccr_bcm2_0: "Targaryen",
    cccma_cgcm3_1: "Daenerys",
    cnrm_cm3: null,
  },
  { month: 6, bccr_bcm2_0: "Melisandre", cccma_cgcm3_1: null, cnrm_cm3: 150 },
  { month: 7, bccr_bcm2_0: "Clifford", cccma_cgcm3_1: "Ferrara", cnrm_cm3: 44 },
  { month: 8, bccr_bcm2_0: "Frances", cccma_cgcm3_1: "Rossini", cnrm_cm3: 36 },
  { month: 9, bccr_bcm2_0: "Roxie", cccma_cgcm3_1: "Harvey", cnrm_cm3: 65 },
];



for (let i = 0; i < listOfMonths.length; i++) {
  row.push({
    month: listOfMonths[i],
    bccr_bcm2_0: list_bccr_bcm2_0[i],
    cccma_cgcm3_1: list_cccma_cgcm3_1[i],
    cnrm_cm3: list_cnrm_cm3[i],
    csiro_mk3_5: list_csiro_mk3_5[i],
    gfdl_cm2_0: list_gfdl_cm2_0[i],
    gfdl_cm2_1: list_gfdl_cm2_1[i],
    ingv_echam4: list_ingv_echam4[i],
    inmcm3_0: list_inmcm3_0[i],
    ipsl_cm4: list_ipsl_cm4[i],
    miroc3_2_medres: list_miroc3_2_medres[i],
    miub_echo_g: list_miub_echo_g[i],
    mpi_echam5: list_mpi_echam5[i],
    mri_cgcm2_3_2a: list_mri_cgcm2_3_2a[i],
    ukmo_hadcm3: list_ukmo_hadcm3[i],
    ukmo_hadgem1: list_ukmo_hadgem1[i],
  });
}