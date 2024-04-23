function checkUsernames(usernames) {
    if (usernames.length === 0) return false;
    const unallowedChars = /[^a-z0-9_]/;

  for (let i = 0; i < usernames.length; i++) {
      if (unallowedChars.test(usernames[i])) return false;
      if (usernames[i].length < 5) return false;
      if (usernames[i].length > 20) return false;

  }
  return true;
}

module.exports = checkUsernames;
