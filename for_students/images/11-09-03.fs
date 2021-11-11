
varying vec2 v_uv;
uniform float suns;
uniform float blur;
uniform float radius;
varying vec3 v_normal;
varying vec3 v_position;
uniform float shininess;
const vec3 lightDirWorld = vec3(0,1,0);
const vec3 baseColor = vec3(1);
const vec3 diffLight = vec3(0,0,1);
const vec3 diffColor = vec3(0.97, 0.91, 0.03);

void main()
{
    float x = v_uv.x * suns;
    float y = v_uv.y * suns;

    float xc = floor(x);
    float yc = floor(y);

    float dx = x-xc-.5;
    float dy = y-yc-.5;
    vec3 influencing_color_A = vec3(0.97, 0.47, 0.01); 
    vec3 influencing_color_B = vec3(0.84, 0.98, 0.02);
    float d = dy+ sqrt(dx*dx + dy*dy);
    float a = blur > -.5 ? blur: fwidth(d);
    float dc = 1.0-smoothstep(radius-a,radius+a,d);
    vec3 totalColor = mix(influencing_color_A,influencing_color_B,dc);
    vec3 viewDir = normalize( - v_position);
    vec3 lightDir = normalize((viewMatrix * vec4(lightDirWorld,0.)).xyz);
    vec3 normal = normalize(v_normal);
    vec3 light = abs(dot(normal, diffLight))* diffColor;
    vec3 reflDir = reflect(-lightDir,normal);
    float alignment = max(dot(viewDir,reflDir),0.);
    vec3 specular = baseColor * pow(alignment,pow(2.,shininess));
    vec3 totalLight = light + specular;
    gl_FragColor = vec4(totalColor*totalLight, 1.);
}

