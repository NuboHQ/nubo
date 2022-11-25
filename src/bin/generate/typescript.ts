import { forEachChild, Node, SyntaxKind } from 'typescript';

type Config = {
  isConfig: boolean;
  isConfigProps: boolean;
  propsKeys: string[];
};

const configs: {
  [fileName: string]: Config;
} = {};

export const processTypescript = (node: Node, key: string) => {
  const config = getConfig(key);

  if (SyntaxKind[node.kind] === 'VariableDeclarationList') {
    if (node.getText().indexOf('const config') === 0) {
      config.isConfig = true;
    } else {
      config.isConfig = false;
    }
  }

  if (config.isConfig && SyntaxKind[node.kind] === 'Identifier') {
    if (config.isConfigProps) {
      config.isConfigProps = true;
      config.propsKeys.push(node.getText());
    }

    if (node.getText() === 'props') {
      config.isConfigProps = true;
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
  configs[key] = { isConfig: false, isConfigProps: false, propsKeys: [] };
};
