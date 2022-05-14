# React UI Blocker

Block UI interaction on your React App.

## [See Demo Here](https://react-ui-blocker-doc.vercel.app/)

### Installation

`npm i @i-c5/react-ui-blocker`

or

`yarn add @i-c5/react-ui-blocker`

### Usage

```
import UiBlocker from @i-c5/react-ui-blocker

export default function SomeFunction({ children}){

    <UiBlocker block="true">
        {children}
    </UiBlocker>

}
```
