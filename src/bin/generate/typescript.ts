import { forEachChild, Node, SyntaxKind } from 'typescript';

type Config = {
  isProps: boolean;
  propsKeys: string[];
};

const configs: {
  [fileName: string]: Config;
} = {};

export const processTypescript = (node: Node, key: string) => {
  const config = getConfig(key);

  if (SyntaxKind[node.kind] === 'VariableDeclarationList') {
    if (node.getText().indexOf('const props') === 0) {
      config.isProps = true;
    } else {
      config.isProps = false;
    }
  }

  if (config.isProps && SyntaxKind[node.kind] === 'Identifier') {
    if (node.getText() !== 'props') {
      config.propsKeys.push(node.getText());
    }
  }

  forEachChild(node, (childNode) => processTypescript(childNode, key));
};

export const getConfig = (key: string) => {
  if (!configs[key]) {
    resetConfig(key);
  }

  return configs[key];
};

export const setConfig = (key: string, config: Config) => {
  configs[key] = config;
};

export const resetConfig = (key: string) => {
  configs[key] = { isProps: false, propsKeys: [] };
};
