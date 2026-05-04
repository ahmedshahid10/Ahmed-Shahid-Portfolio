/**
 * JSX type extensions for @react-three/fiber Three.js elements.
 * React 19 uses React.JSX.IntrinsicElements — augmenting both namespaces
 * for forward compatibility.
 */
import type * as THREE from "three";
import type * as React from "react";

type Ref<T> = React.Ref<T>;

type PointsProps = {
  ref?: Ref<THREE.Points>;
  geometry?: THREE.BufferGeometry;
  [k: string]: unknown;
};
type MeshProps = {
  ref?: Ref<THREE.Mesh>;
  position?: [number, number, number];
  [k: string]: unknown;
};
type PointsMaterialProps = {
  size?: number;
  color?: string | number;
  transparent?: boolean;
  opacity?: number;
  sizeAttenuation?: boolean;
  depthWrite?: boolean;
  ref?: Ref<THREE.PointsMaterial>;
};
type MeshBasicMaterialProps = {
  color?: string | number;
  wireframe?: boolean;
  transparent?: boolean;
  opacity?: number;
  ref?: Ref<THREE.MeshBasicMaterial>;
};
type IcosahedronGeometryProps = {
  args?: [number?, number?];
  ref?: Ref<THREE.IcosahedronGeometry>;
};
type TorusGeometryProps = {
  args?: [number?, number?, number?, number?];
  ref?: Ref<THREE.TorusGeometry>;
};

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      points: PointsProps;
      mesh: MeshProps;
      pointsMaterial: PointsMaterialProps;
      meshBasicMaterial: MeshBasicMaterialProps;
      icosahedronGeometry: IcosahedronGeometryProps;
      torusGeometry: TorusGeometryProps;
    }
  }
}

export {};
