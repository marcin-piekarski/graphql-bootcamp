import faker from "faker";

export const frameworks = [
  {
    id: faker.random.number(),
    uuid: faker.random.uuid(),
    name: "Boostrap",
    version: {
      major: "4",
      minor: "3",
      patch: "0"
    },
    composition: [
      {
        id: faker.random.number(),
        uuid: faker.random.uuid(),
        name: "Layout"
      },
      {
        id: faker.random.number(),
        uuid: faker.random.uuid(),
        name: "Content"
      },
      {
        id: faker.random.number(),
        uuid: faker.random.uuid(),
        name: "Components",
        parts: [
          {
            id: faker.random.number(),
            uuid: faker.random.uuid(),
            name: "Alerts",
            code: {
              start: `<div class="alert alert-primary" role="alert">`,
              end: `</div>`
            }
          },
          {
            id: faker.random.number(),
            uuid: faker.random.uuid(),
            name: "Badges",
            code: {
              start: `<span class="badge badge-primary">`,
              end: `</span>`
            }
          },
          {
            id: faker.random.number(),
            uuid: faker.random.uuid(),
            name: "Breadcrumbs",
            code: {
              start: `
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
              `,
              end: `
                  </ol>
                </nav>  
              `
            }
          },
          {
            id: faker.random.number(),
            uuid: faker.random.uuid(),
            name: "Button",
            code: {
              start: `<button type="button" class="btn btn-primary">`,
              end: `</button>`
            }
          }
        ]
      },
      {
        id: faker.random.number(),
        uuid: faker.random.uuid(),
        name: "Utilities"
      }
    ]
  },
  {
    id: faker.random.number(),
    uuid: faker.random.uuid(),
    name: "Bulma",
    version: {
      major: "0",
      minor: "7",
      patch: "4"
    },
    composition: [
      {
        id: faker.random.number(),
        uuid: faker.random.uuid(),
        name: "Modifiers"
      },
      {
        id: faker.random.number(),
        uuid: faker.random.uuid(),
        name: "Columns"
      },
      {
        id: faker.random.number(),
        uuid: faker.random.uuid(),
        name: "Layout"
      },
      {
        id: faker.random.number(),
        uuid: faker.random.uuid(),
        name: "Form"
      },
      {
        id: faker.random.number(),
        uuid: faker.random.uuid(),
        name: "Elements"
      },
      {
        id: faker.random.number(),
        uuid: faker.random.uuid(),
        name: "Components"
      }
    ]
  },
  {
    id: faker.random.number(),
    name: "Vue.js",
    version: {
      major: "2",
      minor: "6",
      patch: "9"
    },
    composition: [
      {
        id: faker.random.number(),
        uuid: faker.random.uuid(),
        name: "Templates"
      },
      {
        id: faker.random.number(),
        uuid: faker.random.uuid(),
        name: "Components"
      }
    ]
  }
];

export const libraries = [
  {
    id: faker.random.number(),
    name: "React",
    version: {
      major: "16",
      minor: "8",
      patch: "4"
    },
    composition: [
      {
        id: faker.random.number(),
        uuid: faker.random.uuid(),
        name: "Components"
      }
    ]
  }
];
