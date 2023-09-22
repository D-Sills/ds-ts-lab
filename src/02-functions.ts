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
  sorter: (c1: Colleague, c2: Colleague) => number
): EmailContact[] {
  const sorted = colleagues.sort(sorter); // Colleague[] inferred
  const result: EmailContact[] = sorted.map((ce) => ({
    name: ce.name,
    email: ce.contact.email,
  }));
  return result;
}

function findFriends(
  friends: Friend[],
  callback: (friend: Friend) => boolean
): string[] {
  return friends.filter(callback).map((friend) => friend.name);
}

console.log(older(friends[0]));
console.log(allOlder(friends));
console.log(highestExtension(colleagues.current));

addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));

console.log(
  sortColleagues(
    colleagues.current,
    (a, b) => a.contact.extension - b.contact.extension
  )
);
console.log(
  sortColleagues(colleagues.current, (a, b) => a.name.length - b.name.length)
);

console.log(findFriends(friends, (friend) => friend.name.startsWith("I")));
console.log(findFriends(friends, (friend) => friend.age < 35));
