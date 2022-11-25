import { forEachChild, Node, SyntaxKind } from 'typescript';

let isConfig = false;
let isConfigProps = false;
let propsKeys: string[] = [];

export const processTypescript = (node: Node) => {
  if (SyntaxKind[node.kind] === 'VariableDeclarationList') {
    if (node.getText().indexOf('const config') === 0) {
      isConfig = true;
    } else {
      isConfig = false;
    }
  }

  if (isConfig && SyntaxKind[node.kind] === 'Identifier') {
    if (isConfigProps) {
      isConfigProps = true;
      propsKeys.push(node.getText());
    }

    if (node.getText() === 'props') {
      isConfigProps = true;
    }
  }

  forEachChild(node, processTypescript);
};

export const getPropsKeys = () => {
  return propsKeys;
};

export const reset = () => {
  isConfig = false;
  isConfigProps = false;
  propsKeys = [];
};
