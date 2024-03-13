import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// Canvas
const canvas = document.querySelector('canvas.webgl');

// Scene
const scene = new THREE.Scene();

// Objects

// Materials
const material = new THREE.MeshBasicMaterial({color: 'black', side: THREE.DoubleSide});
const orangeMaterial = new THREE.LineBasicMaterial({color: 0xff8c00});

// Groups
const headGroup = new THREE.Group();
const torsoGroup = new THREE.Group();
const leftArmGroup = new THREE.Group();
const rightArmGroup = new THREE.Group();
const leftLegGroup = new THREE.Group();
const rightLegGroup = new THREE.Group();
headGroup.position.y = 3.4;
torsoGroup.position.y = 3.4;
leftArmGroup.position.y = 3.4;
rightArmGroup.position.y = 3.4;
leftLegGroup.position.y = 3.4;
rightLegGroup.position.y = 3.4;

scene.add(headGroup, torsoGroup, leftArmGroup, rightArmGroup, leftLegGroup, rightLegGroup);

// Head
const headMesh1 = new THREE.Mesh(new THREE.PlaneGeometry(0.4, 0.4), material);
const headMesh2 = new THREE.Mesh(new THREE.PlaneGeometry(0.6, 0.6), material);
const headMesh3 = new THREE.Mesh(new THREE.PlaneGeometry(0.8, 0.8), material);
const headMesh4 = new THREE.Mesh(new THREE.PlaneGeometry(0.6, 0.6), material);

const headLine1 = new THREE.LineSegments(new THREE.EdgesGeometry(headMesh1.geometry), orangeMaterial);
const headLine2 = new THREE.LineSegments(new THREE.EdgesGeometry(headMesh2.geometry), orangeMaterial);
const headLine3 = new THREE.LineSegments(new THREE.EdgesGeometry(headMesh3.geometry), orangeMaterial);
const headLine4 = new THREE.LineSegments(new THREE.EdgesGeometry(headMesh4.geometry), orangeMaterial);

headGroup.add(headMesh1, headLine1, headMesh2, headLine2, headMesh3, headLine3, headMesh4, headLine4);

// Torso
const torsoMesh1 = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 1), material);
const torsoMesh2 = new THREE.Mesh(new THREE.PlaneGeometry(1.3, 1), material);
const torsoMesh3 = new THREE.Mesh(new THREE.PlaneGeometry(0.9, 0.9), material);
const torsoMesh4 = new THREE.Mesh(new THREE.PlaneGeometry(1.1, 0.8), material);
const torsoMesh5 = new THREE.Mesh(new THREE.PlaneGeometry(1.6, 0.8), material);

const torsoLine1 = new THREE.LineSegments(new THREE.EdgesGeometry(torsoMesh1.geometry), orangeMaterial);
const torsoLine2 = new THREE.LineSegments(new THREE.EdgesGeometry(torsoMesh2.geometry), orangeMaterial);
const torsoLine3 = new THREE.LineSegments(new THREE.EdgesGeometry(torsoMesh3.geometry), orangeMaterial);
const torsoLine4 = new THREE.LineSegments(new THREE.EdgesGeometry(torsoMesh4.geometry), orangeMaterial);
const torsoLine5 = new THREE.LineSegments(new THREE.EdgesGeometry(torsoMesh5.geometry), orangeMaterial);

torsoGroup.add(torsoMesh1, torsoLine1, torsoMesh2, torsoLine2, torsoMesh3, torsoLine3, torsoMesh4, torsoLine4, torsoMesh5, torsoLine5);

// Left arm
const leftArmMesh1 = new THREE.Mesh(new THREE.PlaneGeometry(0.45, 0.5), material);
const leftArmMesh2 = new THREE.Mesh(new THREE.PlaneGeometry(0.35, 0.35), material);
const leftArmMesh3 = new THREE.Mesh(new THREE.PlaneGeometry(0.3, 0.3), material);
const leftArmMesh4 = new THREE.Mesh(new THREE.PlaneGeometry(0.4, 0.4), material);
const leftArmMesh5 = new THREE.Mesh(new THREE.PlaneGeometry(0.3, 0.3), material);
const leftArmMesh6 = new THREE.Mesh(new THREE.PlaneGeometry(0.25, 0.25), material);
const leftArmMesh7 = new THREE.Mesh(new THREE.PlaneGeometry(0.28, 0.4), material);
const leftArmMesh8 = new THREE.Mesh(new THREE.PlaneGeometry(0.4, 0.8), material);

const leftArmLine1 = new THREE.LineSegments(new THREE.EdgesGeometry(leftArmMesh1.geometry), orangeMaterial);
const leftArmLine2 = new THREE.LineSegments(new THREE.EdgesGeometry(leftArmMesh2.geometry), orangeMaterial);
const leftArmLine3 = new THREE.LineSegments(new THREE.EdgesGeometry(leftArmMesh3.geometry), orangeMaterial);
const leftArmLine4 = new THREE.LineSegments(new THREE.EdgesGeometry(leftArmMesh4.geometry), orangeMaterial);
const leftArmLine5 = new THREE.LineSegments(new THREE.EdgesGeometry(leftArmMesh5.geometry), orangeMaterial);
const leftArmLine6 = new THREE.LineSegments(new THREE.EdgesGeometry(leftArmMesh6.geometry), orangeMaterial);
const leftArmLine7 = new THREE.LineSegments(new THREE.EdgesGeometry(leftArmMesh7.geometry), orangeMaterial);
const leftArmLine8 = new THREE.LineSegments(new THREE.EdgesGeometry(leftArmMesh8.geometry), orangeMaterial);

leftArmGroup.add(leftArmMesh1, leftArmLine1, leftArmMesh2, leftArmLine2, leftArmMesh3, leftArmLine3, leftArmMesh4, leftArmLine4,
    leftArmMesh5, leftArmLine5, leftArmMesh6, leftArmLine6, leftArmMesh7, leftArmLine7, leftArmMesh8, leftArmLine8);

// Right arm
const rightArmMesh1 = new THREE.Mesh(new THREE.PlaneGeometry(0.45, 0.5), material);
const rightArmMesh2 = new THREE.Mesh(new THREE.PlaneGeometry(0.35, 0.35), material);
const rightArmMesh3 = new THREE.Mesh(new THREE.PlaneGeometry(0.3, 0.3), material);
const rightArmMesh4 = new THREE.Mesh(new THREE.PlaneGeometry(0.4, 0.4), material);
const rightArmMesh5 = new THREE.Mesh(new THREE.PlaneGeometry(0.3, 0.3), material);
const rightArmMesh6 = new THREE.Mesh(new THREE.PlaneGeometry(0.25, 0.25), material);
const rightArmMesh7 = new THREE.Mesh(new THREE.PlaneGeometry(0.28, 0.4), material);
const rightArmMesh8 = new THREE.Mesh(new THREE.PlaneGeometry(0.4, 0.8), material);

const rightArmLine1 = new THREE.LineSegments(new THREE.EdgesGeometry(rightArmMesh1.geometry), orangeMaterial);
const rightArmLine2 = new THREE.LineSegments(new THREE.EdgesGeometry(rightArmMesh2.geometry), orangeMaterial);
const rightArmLine3 = new THREE.LineSegments(new THREE.EdgesGeometry(rightArmMesh3.geometry), orangeMaterial);
const rightArmLine4 = new THREE.LineSegments(new THREE.EdgesGeometry(rightArmMesh4.geometry), orangeMaterial);
const rightArmLine5 = new THREE.LineSegments(new THREE.EdgesGeometry(rightArmMesh5.geometry), orangeMaterial);
const rightArmLine6 = new THREE.LineSegments(new THREE.EdgesGeometry(rightArmMesh6.geometry), orangeMaterial);
const rightArmLine7 = new THREE.LineSegments(new THREE.EdgesGeometry(rightArmMesh7.geometry), orangeMaterial);
const rightArmLine8 = new THREE.LineSegments(new THREE.EdgesGeometry(rightArmMesh8.geometry), orangeMaterial);

rightArmGroup.add(rightArmMesh1, rightArmLine1, rightArmMesh2, rightArmLine2, rightArmMesh3, rightArmLine3, rightArmMesh4, rightArmLine4,
    rightArmMesh5, rightArmLine5, rightArmMesh6, rightArmLine6, rightArmMesh7, rightArmLine7, rightArmMesh8, rightArmLine8);

// Left Leg
const leftLegMesh1 = new THREE.Mesh(new THREE.PlaneGeometry(0.9, 1), material);
const leftLegMesh2 = new THREE.Mesh(new THREE.PlaneGeometry(0.85, 0.7), material);
const leftLegMesh3 = new THREE.Mesh(new THREE.PlaneGeometry(0.7, 0.7), material);
const leftLegMesh4 = new THREE.Mesh(new THREE.PlaneGeometry(0.67, 0.67), material);
const leftLegMesh5 = new THREE.Mesh(new THREE.PlaneGeometry(0.6, 0.75), material);
const leftLegMesh6 = new THREE.Mesh(new THREE.PlaneGeometry(0.5, 0.6), material);
const leftLegMesh7 = new THREE.Mesh(new THREE.PlaneGeometry(0.4, 0.6), material);
const leftLegMesh8 = new THREE.Mesh(new THREE.PlaneGeometry(0.3, 0.5), material);
const leftLegMesh9 = new THREE.Mesh(new THREE.PlaneGeometry(0.33, 0.46), material);
const leftLegMesh10 = new THREE.Mesh(new THREE.PlaneGeometry(0.4, 0.6), material);
const leftLegMesh11 = new THREE.Mesh(new THREE.PlaneGeometry(0.5, 1), material);

const leftLegLine1 = new THREE.LineSegments(new THREE.EdgesGeometry(leftLegMesh1.geometry), orangeMaterial);
const leftLegLine2 = new THREE.LineSegments(new THREE.EdgesGeometry(leftLegMesh2.geometry), orangeMaterial);
const leftLegLine3 = new THREE.LineSegments(new THREE.EdgesGeometry(leftLegMesh3.geometry), orangeMaterial);
const leftLegLine4 = new THREE.LineSegments(new THREE.EdgesGeometry(leftLegMesh4.geometry), orangeMaterial);
const leftLegLine5 = new THREE.LineSegments(new THREE.EdgesGeometry(leftLegMesh5.geometry), orangeMaterial);
const leftLegLine6 = new THREE.LineSegments(new THREE.EdgesGeometry(leftLegMesh6.geometry), orangeMaterial);
const leftLegLine7 = new THREE.LineSegments(new THREE.EdgesGeometry(leftLegMesh7.geometry), orangeMaterial);
const leftLegLine8 = new THREE.LineSegments(new THREE.EdgesGeometry(leftLegMesh8.geometry), orangeMaterial);
const leftLegLine9 = new THREE.LineSegments(new THREE.EdgesGeometry(leftLegMesh9.geometry), orangeMaterial);
const leftLegLine10 = new THREE.LineSegments(new THREE.EdgesGeometry(leftLegMesh10.geometry), orangeMaterial);
const leftLegLine11 = new THREE.LineSegments(new THREE.EdgesGeometry(leftLegMesh11.geometry), orangeMaterial);

leftLegGroup.add(leftLegMesh1, leftLegLine1, leftLegMesh2, leftLegLine2, leftLegMesh3, leftLegLine3, leftLegMesh4, leftLegLine4,
    leftLegMesh5, leftLegLine5, leftLegMesh6, leftLegLine6, leftLegMesh7, leftLegLine7, leftLegMesh8, leftLegLine8, leftLegMesh9,
    leftLegLine9, leftLegMesh10, leftLegLine10, leftLegMesh11, leftLegLine11);

// Right Leg
const rightLegMesh1 = new THREE.Mesh(new THREE.PlaneGeometry(0.9, 1), material);
const rightLegMesh2 = new THREE.Mesh(new THREE.PlaneGeometry(0.85, 0.7), material);
const rightLegMesh3 = new THREE.Mesh(new THREE.PlaneGeometry(0.7, 0.7), material);
const rightLegMesh4 = new THREE.Mesh(new THREE.PlaneGeometry(0.67, 0.67), material);
const rightLegMesh5 = new THREE.Mesh(new THREE.PlaneGeometry(0.6, 0.75), material);
const rightLegMesh6 = new THREE.Mesh(new THREE.PlaneGeometry(0.5, 0.6), material);
const rightLegMesh7 = new THREE.Mesh(new THREE.PlaneGeometry(0.4, 0.6), material);
const rightLegMesh8 = new THREE.Mesh(new THREE.PlaneGeometry(0.3, 0.5), material);
const rightLegMesh9 = new THREE.Mesh(new THREE.PlaneGeometry(0.33, 0.46), material);
const rightLegMesh10 = new THREE.Mesh(new THREE.PlaneGeometry(0.4, 0.6), material);
const rightLegMesh11 = new THREE.Mesh(new THREE.PlaneGeometry(0.5, 1), material);

const rightLegLine1 = new THREE.LineSegments(new THREE.EdgesGeometry(rightLegMesh1.geometry), orangeMaterial);
const rightLegLine2 = new THREE.LineSegments(new THREE.EdgesGeometry(rightLegMesh2.geometry), orangeMaterial);
const rightLegLine3 = new THREE.LineSegments(new THREE.EdgesGeometry(rightLegMesh3.geometry), orangeMaterial);
const rightLegLine4 = new THREE.LineSegments(new THREE.EdgesGeometry(rightLegMesh4.geometry), orangeMaterial);
const rightLegLine5 = new THREE.LineSegments(new THREE.EdgesGeometry(rightLegMesh5.geometry), orangeMaterial);
const rightLegLine6 = new THREE.LineSegments(new THREE.EdgesGeometry(rightLegMesh6.geometry), orangeMaterial);
const rightLegLine7 = new THREE.LineSegments(new THREE.EdgesGeometry(rightLegMesh7.geometry), orangeMaterial);
const rightLegLine8 = new THREE.LineSegments(new THREE.EdgesGeometry(rightLegMesh8.geometry), orangeMaterial);
const rightLegLine9 = new THREE.LineSegments(new THREE.EdgesGeometry(rightLegMesh9.geometry), orangeMaterial);
const rightLegLine10 = new THREE.LineSegments(new THREE.EdgesGeometry(rightLegMesh10.geometry), orangeMaterial);
const rightLegLine11 = new THREE.LineSegments(new THREE.EdgesGeometry(rightLegMesh11.geometry), orangeMaterial);

rightLegGroup.add(rightLegMesh1, rightLegLine1, rightLegMesh2, rightLegLine2, rightLegMesh3, rightLegLine3, rightLegMesh4, rightLegLine4,
    rightLegMesh5, rightLegLine5, rightLegMesh6, rightLegLine6, rightLegMesh7, rightLegLine7, rightLegMesh8, rightLegLine8, rightLegMesh9,
    rightLegLine9, rightLegMesh10, rightLegLine10, rightLegMesh11, rightLegLine11);

// Positions
headMesh1.rotation.x = Math.PI * 0.5;
headLine1.rotation.x = Math.PI * 0.5;
headMesh2.rotation.x = Math.PI * 0.5;
headLine2.rotation.x = Math.PI * 0.5;
headMesh3.rotation.x = Math.PI * 0.5;
headLine3.rotation.x = Math.PI * 0.5;
headMesh4.rotation.x = Math.PI * 0.5;
headLine4.rotation.x = Math.PI * 0.5;

headMesh2.position.y = -0.1;
headLine2.position.y = -0.1;
headMesh3.position.y = -0.4;
headLine3.position.y = -0.4;
headMesh4.position.y = -0.7;
headLine4.position.y = -0.7;

torsoMesh1.rotation.x = Math.PI * 0.5;
torsoLine1.rotation.x = Math.PI * 0.5;
torsoMesh2.rotation.x = Math.PI * 0.5;
torsoLine2.rotation.x = Math.PI * 0.5;
torsoMesh3.rotation.x = Math.PI * 0.5;
torsoLine3.rotation.x = Math.PI * 0.5;
torsoMesh4.rotation.x = Math.PI * 0.5;
torsoLine4.rotation.x = Math.PI * 0.5;
torsoMesh5.rotation.x = Math.PI * 0.5;
torsoLine5.rotation.x = Math.PI * 0.5;

torsoMesh1.position.y = -1;
torsoLine1.position.y = -1;
torsoMesh2.position.y = -1.4;
torsoLine2.position.y = -1.4;
torsoMesh3.position.y = -1.8;
torsoLine3.position.y = -1.8;
torsoMesh4.position.y = -2.1;
torsoLine4.position.y = -2.1;
torsoMesh5.position.y = -2.5;
torsoLine5.position.y = -2.5;

leftArmMesh1.rotation.x = Math.PI * 0.5;
leftArmLine1.rotation.x = Math.PI * 0.5;
leftArmMesh1.rotation.y = Math.PI * 0.14;
leftArmLine1.rotation.y = Math.PI * 0.14;
leftArmMesh2.rotation.x = Math.PI * 0.49;
leftArmLine2.rotation.x = Math.PI * 0.49;
leftArmMesh2.rotation.y = Math.PI * 0.16;
leftArmLine2.rotation.y = Math.PI * 0.16;
leftArmMesh3.rotation.x = Math.PI * 0.48;
leftArmLine3.rotation.x = Math.PI * 0.48;
leftArmMesh3.rotation.y = Math.PI * 0.13;
leftArmLine3.rotation.y = Math.PI * 0.13;
leftArmMesh4.rotation.x = Math.PI * 0.44;
leftArmLine4.rotation.x = Math.PI * 0.44;
leftArmMesh4.rotation.y = Math.PI * 0.05;
leftArmLine4.rotation.y = Math.PI * 0.05;
leftArmMesh5.rotation.x = Math.PI * 0.42;
leftArmLine5.rotation.x = Math.PI * 0.42;
leftArmMesh5.rotation.y = Math.PI * 0.05;
leftArmLine5.rotation.y = Math.PI * 0.05;
leftArmMesh6.rotation.x = Math.PI * 0.40;
leftArmLine6.rotation.x = Math.PI * 0.40;
leftArmMesh7.rotation.x = Math.PI * 0.45;
leftArmLine7.rotation.x = Math.PI * 0.45;
leftArmMesh8.rotation.x = Math.PI * 0.5;
leftArmLine8.rotation.x = Math.PI * 0.5;
leftArmMesh8.rotation.y = Math.PI * 0.97;
leftArmLine8.rotation.y = Math.PI * 0.97;

leftArmMesh1.position.y = -1.1;
leftArmLine1.position.y = -1.1;
leftArmMesh1.position.x = 0.8;
leftArmLine1.position.x = 0.8;
leftArmMesh2.position.y = -1.35;
leftArmLine2.position.y = -1.35;
leftArmMesh2.position.x = 1;
leftArmLine2.position.x = 1;
leftArmMesh3.position.y = -1.6;
leftArmLine3.position.y = -1.6;
leftArmMesh3.position.x = 1.2;
leftArmLine3.position.x = 1.2;
leftArmMesh4.position.y = -1.85;
leftArmLine4.position.y = -1.85;
leftArmMesh4.position.x = 1.35;
leftArmLine4.position.x = 1.35;
leftArmMesh4.position.z = 0.1;
leftArmLine4.position.z = 0.1;
leftArmMesh5.position.y = -2.1;
leftArmLine5.position.y = -2.1;
leftArmMesh5.position.x = 1.4;
leftArmLine5.position.x = 1.4;
leftArmMesh5.position.z = 0.3;
leftArmLine5.position.z = 0.3;
leftArmMesh6.position.y = -2.35;
leftArmLine6.position.y = -2.35;
leftArmMesh6.position.x = 1.43;
leftArmLine6.position.x = 1.43;
leftArmMesh6.position.z = 0.40;
leftArmLine6.position.z = 0.40;
leftArmMesh7.position.y = -2.55;
leftArmLine7.position.y = -2.55;
leftArmMesh7.position.x = 1.42;
leftArmLine7.position.x = 1.42;
leftArmMesh7.position.z = 0.55;
leftArmLine7.position.z = 0.55;
leftArmMesh8.position.y = -2.85;
leftArmLine8.position.y = -2.85;
leftArmMesh8.position.x = 1.43;
leftArmLine8.position.x = 1.43;
leftArmMesh8.position.z = 0.7;
leftArmLine8.position.z = 0.7;

rightArmMesh1.rotation.x = Math.PI * 0.5;
rightArmLine1.rotation.x = Math.PI * 0.5;
rightArmMesh1.rotation.y = -Math.PI * 0.14;
rightArmLine1.rotation.y = -Math.PI * 0.14;
rightArmMesh2.rotation.x = Math.PI * 0.49;
rightArmLine2.rotation.x = Math.PI * 0.49;
rightArmMesh2.rotation.y = -Math.PI * 0.16;
rightArmLine2.rotation.y = -Math.PI * 0.16;
rightArmMesh3.rotation.x = Math.PI * 0.48;
rightArmLine3.rotation.x = Math.PI * 0.48;
rightArmMesh3.rotation.y = -Math.PI * 0.13;
rightArmLine3.rotation.y = -Math.PI * 0.13;
rightArmMesh4.rotation.x = Math.PI * 0.44;
rightArmLine4.rotation.x = Math.PI * 0.44;
rightArmMesh4.rotation.y = -Math.PI * 0.05;
rightArmLine4.rotation.y = -Math.PI * 0.05;
rightArmMesh5.rotation.x = Math.PI * 0.42;
rightArmLine5.rotation.x = Math.PI * 0.42;
rightArmMesh5.rotation.y = -Math.PI * 0.05;
rightArmLine5.rotation.y = -Math.PI * 0.05;
rightArmMesh6.rotation.x = Math.PI * 0.40;
rightArmLine6.rotation.x = Math.PI * 0.40;
rightArmMesh7.rotation.x = Math.PI * 0.45;
rightArmLine7.rotation.x = Math.PI * 0.45;
rightArmMesh8.rotation.x = Math.PI * 0.5;
rightArmLine8.rotation.x = Math.PI * 0.5;
rightArmMesh8.rotation.y = -Math.PI * 0.97;
rightArmLine8.rotation.y = -Math.PI * 0.97;

rightArmMesh1.position.y = -1.1;
rightArmLine1.position.y = -1.1;
rightArmMesh1.position.x = -0.8;
rightArmLine1.position.x = -0.8;
rightArmMesh2.position.y = -1.35;
rightArmLine2.position.y = -1.35;
rightArmMesh2.position.x = -1;
rightArmLine2.position.x = -1;
rightArmMesh3.position.y = -1.6;
rightArmLine3.position.y = -1.6;
rightArmMesh3.position.x = -1.2;
rightArmLine3.position.x = -1.2;
rightArmMesh4.position.y = -1.85;
rightArmLine4.position.y = -1.85;
rightArmMesh4.position.x = -1.35;
rightArmLine4.position.x = -1.35;
rightArmMesh4.position.z = 0.1;
rightArmLine4.position.z = 0.1;
rightArmMesh5.position.y = -2.1;
rightArmLine5.position.y = -2.1;
rightArmMesh5.position.x = -1.4;
rightArmLine5.position.x = -1.4;
rightArmMesh5.position.z = 0.3;
rightArmLine5.position.z = 0.3;
rightArmMesh6.position.y = -2.35;
rightArmLine6.position.y = -2.35;
rightArmMesh6.position.x = -1.43;
rightArmLine6.position.x = -1.43;
rightArmMesh6.position.z = 0.40;
rightArmLine6.position.z = 0.40;
rightArmMesh7.position.y = -2.55;
rightArmLine7.position.y = -2.55;
rightArmMesh7.position.x = -1.42;
rightArmLine7.position.x = -1.42;
rightArmMesh7.position.z = 0.55;
rightArmLine7.position.z = 0.55;
rightArmMesh8.position.y = -2.85;
rightArmLine8.position.y = -2.85;
rightArmMesh8.position.x = -1.43;
rightArmLine8.position.x = -1.43;
rightArmMesh8.position.z = 0.7;
rightArmLine8.position.z = 0.7;

leftLegMesh1.rotation.x = Math.PI * 0.53;
leftLegLine1.rotation.x = Math.PI * 0.53;
leftLegMesh1.rotation.y = Math.PI * 0.03;
leftLegLine1.rotation.y = Math.PI * 0.03;
leftLegMesh2.rotation.x = Math.PI * 0.56;
leftLegLine2.rotation.x = Math.PI * 0.56;
leftLegMesh2.rotation.y = Math.PI * 0.05;
leftLegLine2.rotation.y = Math.PI * 0.05;
leftLegMesh3.rotation.x = Math.PI * 0.56;
leftLegLine3.rotation.x = Math.PI * 0.56;
leftLegMesh3.rotation.y = 0.08;
leftLegLine3.rotation.y = 0.08;
leftLegMesh4.rotation.x = Math.PI * 0.58;
leftLegLine4.rotation.x = Math.PI * 0.58;
leftLegMesh4.rotation.y = -0.02;
leftLegLine4.rotation.y = -0.02;
leftLegMesh5.rotation.x = Math.PI * 0.53;
leftLegLine5.rotation.x = Math.PI * 0.53;
leftLegMesh5.rotation.y = Math.PI * 0.01;
leftLegLine5.rotation.y = Math.PI * 0.01;
leftLegMesh5.rotation.z = 0.03;
leftLegLine5.rotation.z = 0.03;
leftLegMesh6.rotation.x = Math.PI * 0.5;
leftLegLine6.rotation.x = Math.PI * 0.5;
leftLegMesh6.rotation.y = Math.PI * 0.01;
leftLegLine6.rotation.y = Math.PI * 0.01;
leftLegMesh6.rotation.z = 0.09;
leftLegLine6.rotation.z = 0.09;
leftLegMesh7.rotation.x = Math.PI * 0.55;
leftLegLine7.rotation.x = Math.PI * 0.55;
leftLegMesh7.rotation.y = Math.PI * 0.01;
leftLegLine7.rotation.y = Math.PI * 0.01;
leftLegMesh7.rotation.z = 0.05;
leftLegLine7.rotation.z = 0.05;
leftLegMesh8.rotation.x = Math.PI * 0.58;
leftLegLine8.rotation.x = Math.PI * 0.58;
leftLegMesh8.rotation.y = Math.PI * 0.01;
leftLegLine8.rotation.y = Math.PI * 0.01;
leftLegMesh8.rotation.z = 0.05;
leftLegLine8.rotation.z = 0.05;
leftLegMesh9.rotation.x = Math.PI * 0.6;
leftLegLine9.rotation.x = Math.PI * 0.6;
leftLegMesh9.rotation.y = Math.PI * 0.01;
leftLegLine9.rotation.y = Math.PI * 0.01;
leftLegMesh9.rotation.z = 0.05;
leftLegLine9.rotation.z = 0.05;
leftLegMesh10.rotation.x = Math.PI * 0.6;
leftLegLine10.rotation.x = Math.PI * 0.6;
leftLegMesh10.rotation.y = Math.PI * 0.01;
leftLegLine10.rotation.y = Math.PI * 0.01;
leftLegMesh10.rotation.z = 0.05;
leftLegLine10.rotation.z = 0.05;
leftLegMesh11.rotation.x = Math.PI * 0.6;
leftLegLine11.rotation.x = Math.PI * 0.6;
leftLegMesh11.rotation.y = Math.PI * 0.01;
leftLegLine11.rotation.y = Math.PI * 0.01;
leftLegMesh11.rotation.z = 0.05;
leftLegLine11.rotation.z = 0.05;

leftLegMesh1.position.y = -2.8;
leftLegLine1.position.y = -2.8;
leftLegMesh1.position.x = 0.55;
leftLegLine1.position.x = 0.55;
leftLegMesh2.position.y = -3.3;
leftLegLine2.position.y = -3.3;
leftLegMesh2.position.x = 0.6;
leftLegLine2.position.x = 0.6;
leftLegMesh2.position.z = 0.1;
leftLegLine2.position.z = 0.1;
leftLegMesh3.position.y = -3.8;
leftLegLine3.position.y = -3.8;
leftLegMesh3.position.x = 0.7;
leftLegLine3.position.x = 0.7;
leftLegMesh3.position.z = 0.12;
leftLegLine3.position.z = 0.12;
leftLegMesh4.position.y = -4.2;
leftLegLine4.position.y = -4.2;
leftLegMesh4.position.x = 0.8;
leftLegLine4.position.x = 0.8;
leftLegMesh4.position.z = 0.12;
leftLegLine4.position.z = 0.12;
leftLegMesh5.position.y = -4.6;
leftLegLine5.position.y = -4.6;
leftLegMesh5.position.x = 0.95;
leftLegLine5.position.x = 0.95;
leftLegMesh5.position.z = 0.13;
leftLegLine5.position.z = 0.13;
leftLegMesh6.position.y = -4.9;
leftLegLine6.position.y = -4.9;
leftLegMesh6.position.x = 1.05;
leftLegLine6.position.x = 1.05;
leftLegMesh6.position.z = 0.09;
leftLegLine6.position.z = 0.09;
leftLegMesh7.position.y = -5.2;
leftLegLine7.position.y = -5.2;
leftLegMesh7.position.x = 1.1;
leftLegLine7.position.x = 1.1;
leftLegMesh7.position.z = 0.09;
leftLegLine7.position.z = 0.09;
leftLegMesh8.position.y = -5.45;
leftLegLine8.position.y = -5.45;
leftLegMesh8.position.x = 1.2;
leftLegLine8.position.x = 1.2;
leftLegMesh8.position.z = 0.09;
leftLegLine8.position.z = 0.09;
leftLegMesh9.position.y = -5.8;
leftLegLine9.position.y = -5.8;
leftLegMesh9.position.x = 1.25;
leftLegLine9.position.x = 1.25;
leftLegMesh9.position.z = 0.09;
leftLegLine9.position.z = 0.09;
leftLegMesh10.position.y = -6.2;
leftLegLine10.position.y = -6.2;
leftLegMesh10.position.x = 1.28;
leftLegLine10.position.x = 1.28;
leftLegMesh10.position.z = 0.2;
leftLegLine10.position.z = 0.2;
leftLegMesh11.position.y = -6.5;
leftLegLine11.position.y = -6.5;
leftLegMesh11.position.x = 1.3;
leftLegLine11.position.x = 1.3;
leftLegMesh11.position.z = 0.3;
leftLegLine11.position.z = 0.3;

rightLegMesh1.rotation.x = Math.PI * 0.53;
rightLegLine1.rotation.x = Math.PI * 0.53;
rightLegMesh1.rotation.y = -Math.PI * 0.03;
rightLegLine1.rotation.y = -Math.PI * 0.03;
rightLegMesh2.rotation.x = Math.PI * 0.56;
rightLegLine2.rotation.x = Math.PI * 0.56;
rightLegMesh2.rotation.y = -Math.PI * 0.05;
rightLegLine2.rotation.y = -Math.PI * 0.05;
rightLegMesh3.rotation.x = Math.PI * 0.56;
rightLegLine3.rotation.x = Math.PI * 0.56;
rightLegMesh3.rotation.y = -0.08;
rightLegLine3.rotation.y = -0.08;
rightLegMesh4.rotation.x = Math.PI * 0.58;
rightLegLine4.rotation.x = Math.PI * 0.58;
rightLegMesh4.rotation.y = 0.02;
rightLegLine4.rotation.y = 0.02;
rightLegMesh5.rotation.x = Math.PI * 0.53;
rightLegLine5.rotation.x = Math.PI * 0.53;
rightLegMesh5.rotation.y = -Math.PI * 0.01;
rightLegLine5.rotation.y = -Math.PI * 0.01;
rightLegMesh5.rotation.z = -0.03;
rightLegLine5.rotation.z = -0.03;
rightLegMesh6.rotation.x = Math.PI * 0.5;
rightLegLine6.rotation.x = Math.PI * 0.5;
rightLegMesh6.rotation.y = -Math.PI * 0.01;
rightLegLine6.rotation.y = -Math.PI * 0.01;
rightLegMesh6.rotation.z = -0.09;
rightLegLine6.rotation.z = -0.09;
rightLegMesh7.rotation.x = Math.PI * 0.55;
rightLegLine7.rotation.x = Math.PI * 0.55;
rightLegMesh7.rotation.y = -Math.PI * 0.01;
rightLegLine7.rotation.y = -Math.PI * 0.01;
rightLegMesh7.rotation.z = -0.05;
rightLegLine7.rotation.z = -0.05;
rightLegMesh8.rotation.x = Math.PI * 0.58;
rightLegLine8.rotation.x = Math.PI * 0.58;
rightLegMesh8.rotation.y = -Math.PI * 0.01;
rightLegLine8.rotation.y = -Math.PI * 0.01;
rightLegMesh8.rotation.z = -0.05;
rightLegLine8.rotation.z = -0.05;
rightLegMesh9.rotation.x = Math.PI * 0.6;
rightLegLine9.rotation.x = Math.PI * 0.6;
rightLegMesh9.rotation.y = -Math.PI * 0.01;
rightLegLine9.rotation.y = -Math.PI * 0.01;
rightLegMesh9.rotation.z = -0.05;
rightLegLine9.rotation.z = -0.05;
rightLegMesh10.rotation.x = Math.PI * 0.6;
rightLegLine10.rotation.x = Math.PI * 0.6;
rightLegMesh10.rotation.y = -Math.PI * 0.01;
rightLegLine10.rotation.y = -Math.PI * 0.01;
rightLegMesh10.rotation.z = -0.05;
rightLegLine10.rotation.z = -0.05;
rightLegMesh11.rotation.x = Math.PI * 0.6;
rightLegLine11.rotation.x = Math.PI * 0.6;
rightLegMesh11.rotation.y = -Math.PI * 0.01;
rightLegLine11.rotation.y = -Math.PI * 0.01;
rightLegMesh11.rotation.z = -0.05;
rightLegLine11.rotation.z = -0.05;

rightLegMesh1.position.y = -2.8;
rightLegLine1.position.y = -2.8;
rightLegMesh1.position.x = -0.55;
rightLegLine1.position.x = -0.55;
rightLegMesh2.position.y = -3.3;
rightLegLine2.position.y = -3.3;
rightLegMesh2.position.x = -0.6;
rightLegLine2.position.x = -0.6;
rightLegMesh2.position.z = 0.1;
rightLegLine2.position.z = 0.1;
rightLegMesh3.position.y = -3.8;
rightLegLine3.position.y = -3.8;
rightLegMesh3.position.x = -0.7;
rightLegLine3.position.x = -0.7;
rightLegMesh3.position.z = 0.12;
rightLegLine3.position.z = 0.12;
rightLegMesh4.position.y = -4.2;
rightLegLine4.position.y = -4.2;
rightLegMesh4.position.x = -0.8;
rightLegLine4.position.x = -0.8;
rightLegMesh4.position.z = 0.12;
rightLegLine4.position.z = 0.12;
rightLegMesh5.position.y = -4.6;
rightLegLine5.position.y = -4.6;
rightLegMesh5.position.x = -0.95;
rightLegLine5.position.x = -0.95;
rightLegMesh5.position.z = 0.13;
rightLegLine5.position.z = 0.13;
rightLegMesh6.position.y = -4.9;
rightLegLine6.position.y = -4.9;
rightLegMesh6.position.x = -1.05;
rightLegLine6.position.x = -1.05;
rightLegMesh6.position.z = 0.09;
rightLegLine6.position.z = 0.09;
rightLegMesh7.position.y = -5.2;
rightLegLine7.position.y = -5.2;
rightLegMesh7.position.x = -1.1;
rightLegLine7.position.x = -1.1;
rightLegMesh7.position.z = 0.09;
rightLegLine7.position.z = 0.09;
rightLegMesh8.position.y = -5.45;
rightLegLine8.position.y = -5.45;
rightLegMesh8.position.x = -1.2;
rightLegLine8.position.x = -1.2;
rightLegMesh8.position.z = 0.09;
rightLegLine8.position.z = 0.09;
rightLegMesh9.position.y = -5.8;
rightLegLine9.position.y = -5.8;
rightLegMesh9.position.x = -1.25;
rightLegLine9.position.x = -1.25;
rightLegMesh9.position.z = 0.09;
rightLegLine9.position.z = 0.09;
rightLegMesh10.position.y = -6.2;
rightLegLine10.position.y = -6.2;
rightLegMesh10.position.x = -1.28;
rightLegLine10.position.x = -1.28;
rightLegMesh10.position.z = 0.2;
rightLegLine10.position.z = 0.2;
rightLegMesh11.position.y = -6.5;
rightLegLine11.position.y = -6.5;
rightLegMesh11.position.x = -1.3;
rightLegLine11.position.x = -1.3;
rightLegMesh11.position.z = 0.3;
rightLegLine11.position.z = 0.3;

// Sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener('resize', () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
camera.position.z = 7;

scene.add(camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
});

renderer.setSize(sizes.width, sizes.height);

const tick = () => {
  // Update controls
  controls.update();

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
