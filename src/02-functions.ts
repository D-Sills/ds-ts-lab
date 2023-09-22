import { Friend, Colleague } from "./myTypes";

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
function highestExtension(cs: Colleague[]): Colleague {
  const result = cs.sort(
    (c1, c2) => c1.contact.extension - c2.contact.extension
  );
  return result[cs.length - 1];
}

function addColleague(
  cs: Colleague[],
  name: string,
  department: string,
  email: string): void {
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

console.log(older(friends[0]));
console.log(allOlder(friends));
console.log(highestExtension(colleagues.current));

addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));
