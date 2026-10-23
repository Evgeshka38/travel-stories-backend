export const clearSessionCookies = (res) => {
  res.clearCookie("sessionId", {
    httpOnly: true,
    secure: true,
    sameSite: "none",
  });

  res.clearCookie("accessToken", {
    httpOnly: true,
    secure: true,
    sameSite: "none",
  });

  res.clearCookie("refreshToken", {
    httpOnly: true,
    secure: true,
    sameSite: "none",
  });
};
