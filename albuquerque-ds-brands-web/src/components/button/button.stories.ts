import { html } from "lit";
import "./index";

export default {
    title: "Components/Button",
};
  
export const Button = ({ disabled, loading, iconLeft, iconRight, content ,component }) => {
    return html`
        <dsb-button
            component=${component} 
            iconRight="${iconRight}"
            iconLeft="${iconLeft}"
            ?disabled=${disabled}
            ?loading="${loading}"
        >
            ${content}
        </dsb-button>
    `
}

Button.args = {
    content: "Button",
    disabled: false,
    loading: false,
    iconLeft: 'figma_logo',
    iconRight: "figma_logo",
}

Button.argTypes = {
    content: {
        name: "Content",
        description: "Indica o texto que será exibido dentro do botão",
        table: {
          category: "Custom Inputs",
          type: { summary: "string" },
          defaultValue: { summary: "" },
        },
    },
    component: {
        name: "Component",
        description: "Indica qual tipo de botão está em uso",
        table: {
            category: "Modifiers",
            type: { summary: "string" },
            defaultValue: { summary: "primary" },
        },
        control: 'select',
        options: ['primary', 'secondary', 'tertiary']
    },
    disabled: {
        name: "Disabled",
        description: "Indica se o botão está habilitado ou não",
        table: {
            category: "Modifiers",
            type: { summary: "boolean" },
            defaultValue: { summary: false },
        }
    },
    loading: {
        name: "Loading",
        description: "Indica se algum conteúdo está carregando",
        table: {
            category: "Modifiers",
            type: { summary: "boolean" },
            defaultValue: { summary: false },
        }
    },
    iconRight: {
        name: "IconRight",
        description: "Ícone à direita do texto",
        table: {
            category: "Modifiers",
            type: { summary: "string" },
            defaultValue: { summary: '' },
        }
    },
    iconLeft: {
        name: "IconLeft",
        description: "Ícone à esquerda do texto",
        table: {
            category: "Modifiers",
            type: { summary: "string" },
            defaultValue: { summary: '' },
        }
    }
}

Button.parameters = {
    docs: {
      source: {
            code: `
<dsb-button
    component="primary" 
    iconRight="figma_logo"
    iconLeft="figma_logo"
    ?disabled=false
    ?loading=false
>
    [Content]
</dsb-button>`,
      },
    },
};

// export const Secondary = ({ disabled, loading, iconLeft, iconRight, content }) => {
//     return html`
//         <dsb-button
//             component="secondary" 
//             iconRight="${iconRight}"
//             iconLeft="${iconLeft}"
//             ?disabled=${disabled}
//             ?loading="${loading}"
//         >
//             ${content}
//         </dsb-button>
//     `
// }

// Secondary.args = {
//     content: "Button",
//     disabled: false,
//     loading: false,
//     iconLeft: 'figma_logo',
//     iconRight: "figma_logo",
// }

// Secondary.argTypes = {
//     content: {
//         name: "Content",
//         description: "Indica o texto que será exibido dentro do botão",
//         table: {
//           category: "Custom Inputs",
//           type: { summary: "string" },
//           defaultValue: { summary: "" },
//         },
//     },
//     disabled: {
//         name: "Disabled",
//         description: "Indica se o botão está habilitado ou não",
//         table: {
//             category: "Modifiers",
//             type: { summary: "boolean" },
//             defaultValue: { summary: false },
//         }
//     },
//     loading: {
//         name: "Loading",
//         description: "Indica se algum conteúdo está carregando",
//         table: {
//             category: "Modifiers",
//             type: { summary: "boolean" },
//             defaultValue: { summary: false },
//         }
//     },
//     iconRight: {
//         name: "IconRight",
//         description: "Ícone à direita do texto",
//         table: {
//             category: "Modifiers",
//             type: { summary: "string" },
//             defaultValue: { summary: '' },
//         }
//     },
//     iconLeft: {
//         name: "IconLeft",
//         description: "Ícone à esquerda do texto",
//         table: {
//             category: "Modifiers",
//             type: { summary: "string" },
//             defaultValue: { summary: '' },
//         }
//     }
// }

// Secondary.parameters = {
//     docs: {
//       source: {
//             code: `
// <dsb-button
//     component="secondary" 
//     iconRight="figma_logo"
//     iconLeft="figma_logo"
//     ?disabled=false
//     ?loading=false
// >
//     [Content]
// </dsb-button>`,
//       },
//     },
// };

// export const Tertiary = ({ disabled, loading, iconLeft, iconRight, content }) => {
//     return html`
//         <dsb-button
//             component="tertiary" 
//             iconRight="${iconRight}"
//             iconLeft="${iconLeft}"
//             ?disabled=${disabled}
//             ?loading="${loading}"
//         >
//             ${content}
//         </dsb-button>
//     `
// }

// Tertiary.args = {
//     content: "Button",
//     disabled: false,
//     loading: false,
//     iconLeft: 'figma_logo',
//     iconRight: "figma_logo",
// }

// Tertiary.argTypes = {
//     content: {
//         name: "Content",
//         description: "Indica o texto que será exibido dentro do botão",
//         table: {
//           category: "Custom Inputs",
//           type: { summary: "string" },
//           defaultValue: { summary: "" },
//         },
//     },
//     disabled: {
//         name: "Disabled",
//         description: "Indica se o botão está habilitado ou não",
//         table: {
//             category: "Modifiers",
//             type: { summary: "boolean" },
//             defaultValue: { summary: false },
//         }
//     },
//     loading: {
//         name: "Loading",
//         description: "Indica se algum conteúdo está carregando",
//         table: {
//             category: "Modifiers",
//             type: { summary: "boolean" },
//             defaultValue: { summary: false },
//         }
//     },
//     iconRight: {
//         name: "IconRight",
//         description: "Ícone à direita do texto",
//         table: {
//             category: "Modifiers",
//             type: { summary: "string" },
//             defaultValue: { summary: '' },
//         }
//     },
//     iconLeft: {
//         name: "IconLeft",
//         description: "Ícone à esquerda do texto",
//         table: {
//             category: "Modifiers",
//             type: { summary: "string" },
//             defaultValue: { summary: '' },
//         }
//     }
// }

// Tertiary.parameters = {
//     docs: {
//       source: {
//             code: `
// <dsb-button
//     component="tertiary" 
//     iconRight="figma_logo"
//     iconLeft="figma_logo"
//     ?disabled=false
//     ?loading=false
// >
//     [Content]
// </dsb-button>`,
//       },
//     },
// };