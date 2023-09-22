import { Friend, Colleague, EmailContact } from "./myTypes";

import { friends, colleagues } from "./01-basics";

function older(f: Friend): string {
  f.age += 1;
  return `${f.name} is now ${f.age}`;
}

function allOlder(friends: Friend[]): string[] {
  const newAges = friends.map((friend) => {
    friend.age++;
    return `${friend.name} is now ${friend.age}`;
  });

  return newAges;
}

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]) {
  // Inferred retun type
  const result = cs.sort(
    (c1, c2) => c1.contact.extension - c2.contact.extension
  );
  return result[cs.length - 1];
}

function addColleague(
  cs: Colleague[],
  name: string,
  department: string,
  email: string
): void {
  const highestExt = highestExtension(cs).contact.extension;
  const newColleague = {
    name,
    department,
    contact: {
      email,
      extension: highestExt + 1,
    },
  };
  cs.push(newColleague);
}

function sortColleagues(
  colleagues: Colleague[],
  sorter: (c1: Colleague, c2: Colleague) => number,
  max?: number // CHANGED
): EmailContact[] {
  let end = colleagues.length;
  if (max !== undefined) {
    end = max < 2 ? 1 : max;
  }
  const sorted = colleagues.sort(sorter);
  const fullResult = sorted.map((ce) => ({
    name: ce.name,
    email: ce.contact.email,
  }));
  return fullResult.slice(0, end);
}

function findFriends(
  friends: Friend[],
  callback: (friend: Friend) => boolean
): string[] {
  return friends.filter(callback).map((friend) => friend.name);
}

function addInterest(friend: Friend, interest: string): string[] {
  if (!friend.interests) {
    friend.interests = [];
  }
  friend.interests.push(interest);
  return friend.interests;
}

console.log(older(friends[0]));
console.log(allOlder(friends));
console.log(highestExtension(colleagues.current));

addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));

console.log(
  sortColleagues(
    colleagues.current,
    (a, b) => a.contact.extension - b.contact.extension,
    3
  )
);
console.log(
  sortColleagues(colleagues.current, (a, b) => a.name.length - b.name.length, 1)
);
console.log(
  sortColleagues(colleagues.current, (a, b) => a.name.length - b.name.length)
); // NEW

console.log(findFriends(friends, (friend) => friend.name.startsWith("I")));
console.log(findFriends(friends, (friend) => friend.age < 35));

console.log(addInterest(friends[1], "Politics"));
