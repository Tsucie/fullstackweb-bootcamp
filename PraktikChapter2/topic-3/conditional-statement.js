const hello = "Hello";
const world = "World";

// First Way
const helloWorld1 = hello + " " + world;

// Second Way
const helloWorld2 = `${hello} ${world}`;

const gebetan1 = {
  name: "Mita",
  isOnline: true,
};

if (gebetan1.isOnline) {
  console.log(`Halo, ${gebetan1.name}!`);
  console.log("Lagi ngapain nih! Sleepcall yuk!");
}

const gebetan2 = {
  name: "Dewi",
  isOnline: true,
  blocked: true,
};

if (gebetan2.isOnline && !gebetan2.blocked) {
  console.log(`Halo, ${gebetan2.name}!`);
  console.log("Lagi ngapain nih! Sleepcall yuk!");
} else {
  console.log("Sebenernya ada yg pengen aku sampein ke kamu!");
  console.log("Tapi sayangnya aku di block sama kamu :(");
}
