/*
 * Copy of 11-05-02.vs
 */

 /* Provided by THREE: (see https://threejs.org/docs/#api/en/renderers/webgl/WebGLProgram)
uniform mat4 modelViewMatrix;
attribute vec3 position;
attribute vec2 uv;
  */

/* pass interpolated variables to the fragment */
varying vec2 v_uv;
varying vec3 v_normal;
varying vec3 v_position;
/* the vertex shader just passes stuff to the fragment shader after doing the
 * appropriate transformations of the vertex information
 */
void main() {
    // pass the texture coordinate to the fragment
    v_uv = uv;
    vec4 pos = (modelViewMatrix * vec4(position,1.0));
    v_position = pos.xyz;
    v_normal = normalMatrix * normal;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
