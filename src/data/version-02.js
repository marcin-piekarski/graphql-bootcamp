import faker from "faker";

export const templates = [
  {
    id: 1,
    uuid: faker.random.uuid(),
    name: "HTML",
    version: {
      major: "5",
      minor: "0",
      patch: "0"
    }
  }
];

export const parts = [
  {
    id: faker.random.number(),
    uuid: faker.random.uuid(),
    belongsTo: 1,
    name: "<!DOCTYPE html>",
    description:
      "The <!DOCTYPE html> doctype ensures that the browser makes a best-effort attempt at following the relevant specifications, rather than using a different rendering mode that is incompatible with some specifications.",
    template: {
      start: {
        code: `<!DOCTYPE html>`
      },
      end: ``,
      slots: {
        default: {}
      }
    }
  },
  {
    id: faker.random.number(),
    uuid: faker.random.uuid(),
    belongsTo: 1,
    name: "<html>",
    description:
      "The HTML <html> element represents the root (top-level element) of an HTML document, so it is also referred to as the root element. All other elements must be descendants of this element.",
    template: {
      start: {
        code: `<html lang="en">`,
        attributes: [
          {
            name: "lang",
            type: "string"
          }
        ]
      },
      end: {
        code: `</html>`
      },
      slots: {
        default: {}
      }
    }
  },
  {
    id: faker.random.number(),
    uuid: faker.random.uuid(),
    belongsTo: 1,
    name: "<head>",
    description:
      "The HTML <head> element contains machine-readable information (metadata) about the document, like its title, scripts, and style sheets.",
    template: {
      start: {
        code: `<head>`
      },
      end: {
        code: `</head>`
      },
      slots: {
        default: {}
      }
    }
  }
];

/**
 *
 *
 *
 *
 */

export const frameworks = [];

export const libraries = [];

// export const frameworks = [
//   {
//     id: faker.random.number(),
//     uuid: faker.random.uuid(),
//     name: "Boostrap",
//     version: {
//       major: "4",
//       minor: "3",
//       patch: "0"
//     },
//     composition: [
//       {
//         id: faker.random.number(),
//         uuid: faker.random.uuid(),
//         name: "Layout"
//       },
//       {
//         id: faker.random.number(),
//         uuid: faker.random.uuid(),
//         name: "Content"
//       },
//       {
//         id: faker.random.number(),
//         uuid: faker.random.uuid(),
//         name: "Components",
//         parts: [
//           {
//             id: faker.random.number(),
//             uuid: faker.random.uuid(),
//             name: "Alerts"
//           },
//           {
//             id: faker.random.number(),
//             uuid: faker.random.uuid(),
//             name: "Badges"
//           },
//           {
//             id: faker.random.number(),
//             uuid: faker.random.uuid(),
//             name: "Breadcrumbs"
//           },
//           {
//             id: faker.random.number(),
//             uuid: faker.random.uuid(),
//             name: "Button"
//           }
//         ]
//       },
//       {
//         id: faker.random.number(),
//         uuid: faker.random.uuid(),
//         name: "Utilities"
//       }
//     ]
//   },
//   {
//     id: faker.random.number(),
//     uuid: faker.random.uuid(),
//     name: "Bulma",
//     version: {
//       major: "0",
//       minor: "7",
//       patch: "4"
//     },
//     composition: [
//       {
//         id: faker.random.number(),
//         uuid: faker.random.uuid(),
//         name: "Modifiers"
//       },
//       {
//         id: faker.random.number(),
//         uuid: faker.random.uuid(),
//         name: "Columns"
//       },
//       {
//         id: faker.random.number(),
//         uuid: faker.random.uuid(),
//         name: "Layout"
//       },
//       {
//         id: faker.random.number(),
//         uuid: faker.random.uuid(),
//         name: "Form"
//       },
//       {
//         id: faker.random.number(),
//         uuid: faker.random.uuid(),
//         name: "Elements"
//       },
//       {
//         id: faker.random.number(),
//         uuid: faker.random.uuid(),
//         name: "Components"
//       }
//     ]
//   },
//   {
//     id: faker.random.number(),
//     name: "Vue.js",
//     version: {
//       major: "2",
//       minor: "6",
//       patch: "9"
//     },
//     composition: [
//       {
//         id: faker.random.number(),
//         uuid: faker.random.uuid(),
//         name: "Templates"
//       },
//       {
//         id: faker.random.number(),
//         uuid: faker.random.uuid(),
//         name: "Components"
//       }
//     ]
//   }
// ];

// export const libraries = [
//   {
//     id: faker.random.number(),
//     name: "React",
//     version: {
//       major: "16",
//       minor: "8",
//       patch: "4"
//     },
//     composition: [
//       {
//         id: faker.random.number(),
//         uuid: faker.random.uuid(),
//         name: "Components"
//       }
//     ]
//   }
// ];
