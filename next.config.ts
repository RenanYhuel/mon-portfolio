import type { NextConfig } from "next";
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.plugins.push(new MiniCssExtractPlugin());
    }
    return config;
  },
};

export default nextConfig;
