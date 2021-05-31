export const _ThisMonth = (
  isLocal = true,
) => {
  const now = new Date();
  if (isLocal) {
    return new Date(
      now.getFullYear(), now.getMonth(), 1, 0, 0, 0, 0,
    );
  } else {
    return new Date(Date.UTC(
      now.getUTCFullYear(), now.getUTCMonth(), 1, 0, 0, 0, 0,
    ));
  }
};

export default { _ThisMonth };
