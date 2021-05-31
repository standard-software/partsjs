export const _ThisYear = (
  isLocal = true,
) => {
  const now = new Date();
  if (isLocal) {
    return new Date(
      now.getFullYear(), 0, 1, 0, 0, 0, 0,
    );
  } else {
    return new Date(Date.UTC(
      now.getUTCFullYear(), 0, 1, 0, 0, 0, 0,
    ));
  }
};

export default { _ThisYear };
