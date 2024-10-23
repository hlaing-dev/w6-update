export const paths = {
  home: "/",
  wallet: "/wallet",
  profile: "/profile",
  payment: "/payment",
  income: "/income",
  withdraw_record: "/withdraw_record",
  withdraw_detail: "/withdraw_detail/:id",
  getWithdrawDetail: (id: any) => `/withdraw_detail/${id}`,
  myHost : "/my_host",
  liveAccount : "/live_acc",
};
