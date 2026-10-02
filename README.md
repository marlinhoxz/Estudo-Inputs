# 📚 Estudo de Inputs — React + TypeScript

Projeto desenvolvido para estudar e praticar o **controle de formulários e inputs no React**, utilizando **TypeScript** e **Next.js**.

O foco principal deste estudo foi entender como trabalhar com **componentes controlados**, gerenciamento de estado e tipagem dos diferentes elementos de formulário.

## 🎯 Objetivo

Praticar a criação de componentes reutilizáveis para diferentes tipos de inputs, entendendo como o estado do React se relaciona com os valores exibidos nos elementos HTML.

Durante o desenvolvimento, foram estudados conceitos como:

- Estados reativos com `useState`
- Componentes controlados
- `value` e `checked`
- Eventos `onChange`
- Tipagem de eventos com TypeScript
- Tipagem de `props`
- `React.Dispatch` e `React.SetStateAction`
- `HTMLInputElement`
- `HTMLSelectElement`
- `HTMLTextAreaElement`
- Composição de tipos com `extends`
- Componentes reutilizáveis
- Inputs `text`, `email`, `password`
- `select`
- `radio`
- `checkbox`

## 🧩 Componentes estudados

### Input

Inputs controlados pelo estado do React:

```tsx
<input
  value={value}
  onChange={handleChange}
/>
```

### Select

Componente que recebe uma lista de opções e mantém o valor selecionado sincronizado com o estado:

```tsx
<Select
  options={["React", "Next.js", "TypeScript"]}
  value={value}
  setValue={setValue}
/>
```

### Radio

Estudo de seleção de uma única opção utilizando `checked` e `value`.

### Checkbox

Estudo de seleção de múltiplas opções utilizando um array:

```ts
const [value, setValue] = useState<string[]>([]);
```

Exemplo de estado:

```ts
["React", "Next.js", "TypeScript"]
```

## 🧠 Conceitos de TypeScript

Um dos objetivos do projeto foi entender como tipar corretamente os componentes de formulário.

Exemplo:

```tsx
interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: string[];
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}
```

Para inputs:

```tsx
interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}
```

Dessa forma, os componentes podem receber tanto suas próprias propriedades quanto as propriedades nativas dos elementos HTML.

## 🛠️ Tecnologias

- **Next.js**
- **React**
- **TypeScript**

## 📁 Estrutura

```text
src/
├── app/
│   └── page.tsx
│
└── components/
    ├── Checkbox.tsx
    ├── Select.tsx
    └── ...
```

## 🚀 Como executar

Clone o repositório:

```bash
git clone https://github.com/marlinhoxz/Estudo-Inputs.git
```

Entre na pasta:

```bash
cd Estudo-Inputs
```

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npm run dev
```

Acesse:

```text
http://localhost:3000
```

## 📖 O que este projeto representa

Este projeto faz parte dos meus estudos de **React e TypeScript**, com foco em compreender os fundamentos antes de avançar para abstrações mais complexas.

A ideia não é apenas criar os componentes, mas entender como o React controla os valores dos inputs através do estado e como o TypeScript pode garantir a segurança desses dados.

## 👨‍💻 Autor

**Marlon**

GitHub:  
https://github.com/marlinhoxz
