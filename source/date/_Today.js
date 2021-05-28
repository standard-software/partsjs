export const _Today = (
  isLocal = true,
) => {
  const now = new Date();
  if (isLocal) {
    return new Date(
      now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0,
    );
  } else {
    return new Date(Date.UTC(
      now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), 0, 0, 0, 0,
    ));
  }
};

export default { _Today };
