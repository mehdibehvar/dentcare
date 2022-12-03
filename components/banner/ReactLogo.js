import styled from '@emotion/styled'
import React from 'react'

export default function ReactSvgLogo() {
  const SvgWrapper=styled("div")(({theme})=>({
    svg:{
  path:{
    fill:theme.palette.primary.main
  }
    }
  }))
  return (
  <SvgWrapper>
      <svg width="325" height="69" viewBox="0 0 325 69" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path  d="M22.8438 42.8438C22.8438 42.1875 22.9062 41.4375 23.0312 40.5938C23.1875 39.75 23.375 38.8906 23.5938 38.0156C23.8125 37.1094 24.0312 36.2344 24.25 35.3906C24.4688 34.5469 24.6562 33.7969 24.8125 33.1406C25 32.3281 24.9844 31.7031 24.7656 31.2656C24.5469 30.8281 24.1719 30.6094 23.6406 30.6094C23.3906 30.6094 22.8906 30.8281 22.1406 31.2656C21.4219 31.7031 20.625 32.4688 19.75 33.5625C18.9062 34.625 18.0625 36.0781 17.2188 37.9219C16.4062 39.7344 15.7656 42.0469 15.2969 44.8594C14.7031 45.1719 14.1406 45.375 13.6094 45.4688C13.3281 45.5312 13.0781 45.5781 12.8594 45.6094C12.2344 45.6406 11.8281 45.5312 11.6406 45.2812C11.4531 45.0625 11.4844 44.5 11.7344 43.5938C11.8594 43.1562 12.0781 42.4531 12.3906 41.4844C12.7344 40.5156 13.0625 39.4688 13.375 38.3438C13.6875 37.1875 13.9531 36.0469 14.1719 34.9219C14.4219 33.7656 14.5469 32.7656 14.5469 31.9219C14.5469 31.3281 14.4375 30.9219 14.2188 30.7031C14.0312 30.4844 13.75 30.375 13.375 30.375C13.0938 30.375 12.625 30.5312 11.9688 30.8438C11.3125 31.1562 10.5781 31.7656 9.76562 32.6719C8.95312 33.5781 8.14062 34.8438 7.32812 36.4688C6.54688 38.0625 5.875 40.1406 5.3125 42.7031V42.6094C5.25 42.8594 5.1875 43.1094 5.125 43.3594C5.0625 43.5781 5.01562 43.8125 4.98438 44.0625C4.95312 44.3125 4.90625 44.5469 4.84375 44.7656L2.5 45.7969C2.34375 45.8594 2.14062 45.9062 1.89062 45.9375C1.67188 45.9688 1.45312 45.9219 1.23438 45.7969C1.04688 45.7031 0.90625 45.4844 0.8125 45.1406C0.71875 44.7969 0.75 44.2812 0.90625 43.5938L3.85938 31.3594C3.95312 30.9531 4.03125 30.5625 4.09375 30.1875C4.15625 29.8438 4.1875 29.5156 4.1875 29.2031C4.21875 28.8594 4.20312 28.5781 4.14062 28.3594C4.67188 28.1094 5.14062 27.9219 5.54688 27.7969C5.95312 27.6719 6.28125 27.5781 6.53125 27.5156C6.84375 27.4219 7.10938 27.375 7.32812 27.375C8.32812 27.375 8.65625 28.2344 8.3125 29.9531C8.1875 30.4531 8 31.1875 7.75 32.1562C8.34375 31.4062 8.96875 30.7031 9.625 30.0469C10.3125 29.3594 11 28.75 11.6875 28.2188C12.375 27.6875 13.0625 27.2656 13.75 26.9531C14.4688 26.6406 15.1719 26.4844 15.8594 26.4844C16.3906 26.4844 16.8281 26.6406 17.1719 26.9531C17.5469 27.2656 17.8281 27.6875 18.0156 28.2188C18.2344 28.7188 18.3594 29.3281 18.3906 30.0469C18.4219 30.7344 18.3906 31.4531 18.2969 32.2031C18.7969 31.5469 19.3438 30.8906 19.9375 30.2344C20.5625 29.5469 21.2031 28.9375 21.8594 28.4062C22.5469 27.875 23.25 27.4375 23.9688 27.0938C24.6875 26.75 25.4062 26.5781 26.125 26.5781C26.9688 26.5781 27.6094 26.8281 28.0469 27.3281C28.5156 27.8281 28.8281 28.4688 28.9844 29.25C29.1719 30.0312 29.2188 30.875 29.125 31.7812C29.0625 32.6875 28.9375 33.5625 28.75 34.4062L27.1562 40.7344C26.8125 42.2969 27.1406 43.0781 28.1406 43.0781C28.9219 43.0781 29.7812 42.7031 30.7188 41.9531C31.6562 41.2031 32.5625 40.3125 33.4375 39.2812C34.3438 38.25 35.1875 37.1875 35.9688 36.0938C36.75 35 37.4062 34.125 37.9375 33.4688C38.125 33.25 38.3125 33.125 38.5 33.0938C38.7188 33.0625 38.8906 33.1094 39.0156 33.2344C39.1719 33.3281 39.25 33.5 39.25 33.75C39.2812 34 39.2031 34.3125 39.0156 34.6875C38.3906 35.7812 37.625 37 36.7188 38.3438C35.8125 39.6562 34.8125 40.8906 33.7188 42.0469C32.6562 43.2031 31.5156 44.1719 30.2969 44.9531C29.0781 45.7344 27.8125 46.125 26.5 46.125C26.0625 46.125 25.625 46.0781 25.1875 45.9844C24.7812 45.8906 24.3906 45.7188 24.0156 45.4688C23.6719 45.2188 23.3906 44.8906 23.1719 44.4844C22.9531 44.0469 22.8438 43.5 22.8438 42.8438ZM56.6875 35.25C55.75 36.625 54.6875 37.9688 53.5 39.2812C52.3125 40.5625 51.0469 41.7188 49.7031 42.75C48.3906 43.75 47.0312 44.5625 45.625 45.1875C44.25 45.8125 42.9062 46.125 41.5938 46.125C40.9062 46.125 40.1562 45.9531 39.3438 45.6094C38.5625 45.2969 37.8438 44.7969 37.1875 44.1094C36.5312 43.4219 36 42.5312 35.5938 41.4375C35.2188 40.3438 35.1094 39.0156 35.2656 37.4531C35.3906 36.1719 35.7812 34.8281 36.4375 33.4219C37.125 31.9844 37.9531 30.6719 38.9219 29.4844C39.9219 28.2969 41.0312 27.3125 42.25 26.5312C43.5 25.75 44.75 25.3594 46 25.3594C47.1875 25.3594 48.0469 25.6562 48.5781 26.25C49.1094 26.8438 49.3438 27.5781 49.2812 28.4531C49.1875 29.4219 48.9062 30.3125 48.4375 31.125C48 31.9375 47.4688 32.6719 46.8438 33.3281C46.2188 33.9844 45.5469 34.5781 44.8281 35.1094C44.1406 35.6406 43.4844 36.125 42.8594 36.5625C42.1719 37.0312 41.5156 37.4844 40.8906 37.9219C40.2656 38.3281 39.7188 38.7031 39.25 39.0469C39.2812 39.8281 39.4219 40.4844 39.6719 41.0156C39.9219 41.5469 40.2344 41.9844 40.6094 42.3281C40.9844 42.6406 41.4062 42.875 41.875 43.0312C42.375 43.1562 42.875 43.2188 43.375 43.2188C44.4375 43.2188 45.5469 42.8906 46.7031 42.2344C47.8594 41.5469 48.9844 40.7344 50.0781 39.7969C51.2031 38.8281 52.2344 37.8281 53.1719 36.7969C54.1406 35.7656 54.9375 34.875 55.5625 34.125C55.7812 33.875 56 33.7344 56.2188 33.7031C56.4688 33.6406 56.6562 33.6719 56.7812 33.7969C56.9375 33.8906 57.0156 34.0781 57.0156 34.3594C57.0156 34.6094 56.9062 34.9062 56.6875 35.25ZM44.6875 28.0312C44.3125 28.0312 43.8594 28.2188 43.3281 28.5938C42.8281 28.9688 42.3281 29.5156 41.8281 30.2344C41.3281 30.9219 40.8594 31.7812 40.4219 32.8125C39.9844 33.8125 39.6562 34.9688 39.4375 36.2812C39.8125 36 40.2188 35.7188 40.6562 35.4375C41.0938 35.125 41.5312 34.7969 41.9688 34.4531C43.3125 33.4219 44.25 32.5156 44.7812 31.7344C45.3125 30.9531 45.6094 30.2812 45.6719 29.7188C45.7344 29.125 45.6719 28.7031 45.4844 28.4531C45.2969 28.1719 45.0312 28.0312 44.6875 28.0312ZM70.6094 33.1406C70.7344 32.9531 70.8906 32.8438 71.0781 32.8125C71.2969 32.75 71.4688 32.7656 71.5938 32.8594C71.7188 32.9531 71.7812 33.1094 71.7812 33.3281C71.8125 33.5469 71.7344 33.8438 71.5469 34.2188C70.9219 35.4062 70.0938 36.6875 69.0625 38.0625C68.0625 39.4375 67 40.7344 65.875 41.9531C64.75 43.1406 63.6562 44.125 62.5938 44.9062C61.5312 45.6875 60.6406 46.0781 59.9219 46.0781C58.8906 46.0781 58.0312 45.875 57.3438 45.4688C56.6562 45.0625 56.1094 44.5625 55.7031 43.9688C55.3281 43.375 55.0625 42.7344 54.9062 42.0469C54.75 41.3281 54.7031 40.6719 54.7656 40.0781C54.7969 39.5781 54.9062 38.6875 55.0938 37.4062C55.2812 36.0938 55.5312 34.5938 55.8438 32.9062C56.1562 31.1875 56.5 29.3594 56.875 27.4219C57.2812 25.4531 57.7031 23.5625 58.1406 21.75C57.6094 21.8125 57.0781 21.875 56.5469 21.9375C56.0156 22 55.5312 22.0312 55.0938 22.0312C54.0938 22.0312 53.1562 21.9219 52.2812 21.7031C51.375 21.4531 50.7031 21.2188 50.2656 21C50.0156 20.875 49.9062 20.7031 49.9375 20.4844C49.9688 20.2344 50.0625 20 50.2188 19.7812C50.375 19.5312 50.5781 19.3281 50.8281 19.1719C51.0469 18.9844 51.25 18.8906 51.4375 18.8906C52.0312 18.9531 52.6719 19.0156 53.3594 19.0781C54.0469 19.1094 54.7969 19.1094 55.6094 19.0781C56.2031 19.0469 56.7656 19 57.2969 18.9375C57.8594 18.875 58.4062 18.7969 58.9375 18.7031C59.3438 17.2031 59.7344 15.9063 60.1094 14.8125C60.5156 13.6875 60.875 12.9063 61.1875 12.4688C61.2812 12.3125 61.4844 12.1875 61.7969 12.0938C62.1406 11.9688 62.5 11.8906 62.875 11.8594C63.25 11.7969 63.6094 11.7969 63.9531 11.8594C64.2969 11.8906 64.5469 12 64.7031 12.1875C64.8594 12.4375 64.9219 13.0781 64.8906 14.1094C64.8594 15.1406 64.6875 16.4531 64.375 18.0469C65.6875 18.0469 66.8438 18.125 67.8438 18.2812C68.875 18.4062 69.75 18.5625 70.4688 18.75C71.1875 18.9062 71.7656 19.0781 72.2031 19.2656C72.6406 19.4219 72.9688 19.5312 73.1875 19.5938C73.4062 19.6562 73.5156 19.8125 73.5156 20.0625C73.5469 20.3125 73.5 20.5781 73.375 20.8594C73.2812 21.1094 73.1094 21.3281 72.8594 21.5156C72.6094 21.7031 72.3281 21.7656 72.0156 21.7031C71.7031 21.6719 71.3438 21.6094 70.9375 21.5156C70.5625 21.4219 70.0938 21.3438 69.5312 21.2812C69 21.2188 68.3594 21.1562 67.6094 21.0938C66.8594 21.0312 65.9844 21 64.9844 21C64.7969 21 64.5781 21.0156 64.3281 21.0469C64.1094 21.0469 63.875 21.0469 63.625 21.0469C63.5 21.5469 63.375 22.0469 63.25 22.5469C63.1562 23.0156 63.0156 23.5156 62.8281 24.0469C62.4219 25.2969 61.9531 26.6562 61.4219 28.125C60.9531 29.4062 60.3906 30.875 59.7344 32.5312C59.0781 34.1875 58.3438 35.9531 57.5312 37.8281C57.3438 39.1719 57.3594 40.2031 57.5781 40.9219C57.8281 41.6094 58.125 42.1094 58.4688 42.4219C58.875 42.7656 59.375 42.9531 59.9688 42.9844C60.4375 43.0469 61 42.8906 61.6562 42.5156C62.3438 42.1094 63.0469 41.5781 63.7656 40.9219C64.4844 40.2656 65.2031 39.5469 65.9219 38.7656C66.6719 37.9844 67.3594 37.2188 67.9844 36.4688C68.6094 35.7188 69.1562 35.0469 69.625 34.4531C70.0938 33.8281 70.4219 33.3906 70.6094 33.1406ZM91.8438 35.6719C91.4062 36.2969 90.8438 37.0781 90.1562 38.0156C89.4688 38.9219 88.75 39.8438 88 40.7812C87.2812 41.6875 86.5625 42.5312 85.8438 43.3125C85.1562 44.0625 84.5781 44.5938 84.1094 44.9062C83.7969 45.0938 83.4375 45.25 83.0312 45.375C82.625 45.5 82.2031 45.5781 81.7656 45.6094C81.3594 45.6406 80.9688 45.6094 80.5938 45.5156C80.2188 45.4531 79.8906 45.3281 79.6094 45.1406C79.3281 44.9219 79.0938 44.6094 78.9062 44.2031C78.75 43.8594 78.5938 43.4062 78.4375 42.8438C78.3125 42.2812 78.2656 41.5781 78.2969 40.7344C77.5469 41.9844 76.7188 42.9531 75.8125 43.6406C74.9062 44.2969 74.0469 44.7812 73.2344 45.0938C72.2969 45.4375 71.3594 45.6406 70.4219 45.7031C69.9844 45.7031 69.5156 45.5469 69.0156 45.2344C68.5156 44.9531 68.0938 44.5 67.75 43.875C67.4062 43.2188 67.1875 42.3906 67.0938 41.3906C67 40.3594 67.125 39.1406 67.4688 37.7344C67.9062 35.8281 68.5938 34.0938 69.5312 32.5312C70.5 30.9688 71.5469 29.6406 72.6719 28.5469C73.7969 27.4219 74.9062 26.5781 76 26.0156C77.0938 25.4531 78 25.2031 78.7188 25.2656C79.5625 25.4219 80.25 25.6719 80.7812 26.0156C81.2188 26.3281 81.5 26.7969 81.625 27.4219C81.7812 28.0156 81.5312 28.8125 80.875 29.8125C81.3125 29.7188 81.6719 29.6562 81.9531 29.625C82.2656 29.5938 82.5 29.5781 82.6562 29.5781C82.8438 29.5781 82.9688 29.5938 83.0312 29.625C83.0625 29.6875 83.0781 29.8281 83.0781 30.0469C83.0781 30.2344 83.0312 30.5938 82.9375 31.125C82.8438 31.6562 82.7031 32.375 82.5156 33.2812C82.3281 34.1875 82.0781 35.3594 81.7656 36.7969C81.7031 37.0781 81.6406 37.3438 81.5781 37.5938C81.5469 37.8125 81.5 38.0469 81.4375 38.2969C81.4062 38.5156 81.3594 38.7812 81.2969 39.0938C81.2344 39.4062 81.1562 39.7969 81.0625 40.2656C81.0312 40.5469 81.0156 40.8594 81.0156 41.2031C81.0469 41.5156 81.1094 41.8125 81.2031 42.0938C81.2969 42.375 81.4375 42.6094 81.625 42.7969C81.8438 42.9531 82.1406 43.0312 82.5156 43.0312C82.8281 43.0312 83.2344 42.8438 83.7344 42.4688C84.2344 42.0625 84.7656 41.5625 85.3281 40.9688C85.8906 40.3438 86.4688 39.6719 87.0625 38.9531C87.6875 38.2031 88.2656 37.4844 88.7969 36.7969C89.3281 36.1094 89.7969 35.5 90.2031 34.9688C90.6406 34.4375 90.9531 34.0469 91.1406 33.7969C91.3906 33.5156 91.6406 33.3594 91.8906 33.3281C92.1406 33.2656 92.3281 33.3281 92.4531 33.5156C92.5781 33.7031 92.5938 33.9844 92.5 34.3594C92.4375 34.7344 92.2188 35.1719 91.8438 35.6719ZM78.1094 37.7344C78.2656 37.1094 78.4531 36.375 78.6719 35.5312C78.8906 34.6875 79.0781 33.875 79.2344 33.0938C79.3906 32.3125 79.5 31.6719 79.5625 31.1719C79.6562 30.6406 79.6406 30.3906 79.5156 30.4219C79.3594 30.4531 79.1875 30.5 79 30.5625C78.8438 30.625 78.6406 30.6719 78.3906 30.7031C78.1406 30.7344 77.8906 30.7812 77.6406 30.8438C77.8906 30.3438 78.0312 29.9375 78.0625 29.625C78.125 29.2812 78.1406 29.0156 78.1094 28.8281C78.0781 28.6094 78.0156 28.4375 77.9219 28.3125C77.5781 28.0312 76.9688 28.2656 76.0938 29.0156C75.25 29.7344 74.2656 31.0781 73.1406 33.0469C72.6719 33.8594 72.2969 34.7344 72.0156 35.6719C71.7344 36.5781 71.5312 37.4375 71.4062 38.25C71.3125 39.0625 71.2969 39.7812 71.3594 40.4062C71.4219 41 71.5469 41.3906 71.7344 41.5781C72.0781 41.9219 72.4688 42.0938 72.9062 42.0938C73.3438 42.0625 73.7812 41.9375 74.2188 41.7188C74.6875 41.4688 75.1406 41.1562 75.5781 40.7812C76.0469 40.4062 76.4531 40.0156 76.7969 39.6094C77.1719 39.2031 77.4688 38.8281 77.6875 38.4844C77.9375 38.1406 78.0781 37.8906 78.1094 37.7344ZM103.609 36.0469C103.453 37.0156 103.297 37.9375 103.141 38.8125C103.016 39.6875 102.938 40.3906 102.906 40.9219C102.875 41.7031 103.016 42.2656 103.328 42.6094C103.641 42.9531 103.984 43.125 104.359 43.125C104.797 43.125 105.328 42.9062 105.953 42.4688C106.609 42.0312 107.297 41.4844 108.016 40.8281C108.734 40.1719 109.453 39.4531 110.172 38.6719C110.891 37.8906 111.547 37.1562 112.141 36.4688C112.766 35.75 113.281 35.125 113.688 34.5938C114.125 34.0625 114.422 33.7188 114.578 33.5625C114.766 33.375 114.953 33.2656 115.141 33.2344C115.359 33.2031 115.531 33.2344 115.656 33.3281C115.781 33.4219 115.844 33.5938 115.844 33.8438C115.844 34.0938 115.719 34.4062 115.469 34.7812C115.094 35.375 114.609 36.0781 114.016 36.8906C113.422 37.6719 112.766 38.4844 112.047 39.3281C111.328 40.1719 110.562 41 109.75 41.8125C108.969 42.625 108.172 43.3438 107.359 43.9688C106.578 44.5938 105.812 45.0938 105.062 45.4688C104.344 45.875 103.688 46.0781 103.094 46.0781C102.656 46.0781 102.234 45.9531 101.828 45.7031C101.453 45.4531 101.109 45.125 100.797 44.7188C100.484 44.3125 100.234 43.8594 100.047 43.3594C99.8906 42.8594 99.8281 42.3594 99.8594 41.8594C99.8906 41.6406 99.9375 41.2656 100 40.7344C98.6875 42.2031 97.3594 43.375 96.0156 44.25C94.7031 45.0938 93.4375 45.5156 92.2188 45.5156C91.7812 45.5156 91.3125 45.4062 90.8125 45.1875C90.3125 44.9688 89.8594 44.6094 89.4531 44.1094C89.0781 43.6094 88.7656 42.9531 88.5156 42.1406C88.2656 41.3281 88.1719 40.3438 88.2344 39.1875C88.3281 37.375 88.6875 35.6562 89.3125 34.0312C89.9375 32.4062 90.7188 31 91.6562 29.8125C92.625 28.5938 93.7031 27.6406 94.8906 26.9531C96.1094 26.2344 97.3281 25.875 98.5469 25.875C99.0781 25.875 99.5625 26.0156 100 26.2969C100.438 26.5469 100.812 26.8906 101.125 27.3281C101.438 27.7344 101.688 28.1875 101.875 28.6875C102.094 29.1875 102.25 29.6562 102.344 30.0938C102.562 29.1875 102.766 28.2969 102.953 27.4219C103.141 26.5469 103.328 25.7188 103.516 24.9375C103.828 23.7812 104.156 22.5312 104.5 21.1875C104.812 20.0312 105.172 18.7031 105.578 17.2031C105.984 15.7031 106.438 14.125 106.938 12.4688C107.25 12.2187 107.547 12.0312 107.828 11.9062C108.109 11.7813 108.375 11.6875 108.625 11.625C108.906 11.5312 109.172 11.4844 109.422 11.4844C109.734 11.4844 110.016 11.5312 110.266 11.625C110.516 11.6875 110.719 11.8906 110.875 12.2344C111.062 12.5469 111.188 13.0312 111.25 13.6875C111.312 14.3438 111.312 15.2344 111.25 16.3594C111.188 17.7344 110.938 19.2344 110.5 20.8594C110.094 22.4844 109.547 24.1719 108.859 25.9219C108.172 27.6406 107.375 29.375 106.469 31.125C105.594 32.8438 104.641 34.4844 103.609 36.0469ZM100.844 36.6562C100.969 36.0625 101.078 35.4688 101.172 34.875C101.297 34.2812 101.438 33.6719 101.594 33.0469C101.531 33.0781 101.469 33.1094 101.406 33.1406C101.375 33.1719 101.328 33.2031 101.266 33.2344C100.922 33.3906 100.688 33.3906 100.562 33.2344C100.438 33.0469 100.375 32.7656 100.375 32.3906C100.375 32.2031 100.359 31.875 100.328 31.4062C100.297 30.9062 100.203 30.4062 100.047 29.9062C99.9219 29.375 99.7188 28.9219 99.4375 28.5469C99.1562 28.1406 98.7656 27.9375 98.2656 27.9375C97.5469 27.9375 96.8125 28.3125 96.0625 29.0625C95.3125 29.7812 94.6094 30.6719 93.9531 31.7344C93.2969 32.7656 92.75 33.875 92.3125 35.0625C91.875 36.25 91.625 37.3125 91.5625 38.25C91.5 39.75 91.6875 40.8281 92.125 41.4844C92.5625 42.1406 93.1562 42.4688 93.9062 42.4688C94.4688 42.4688 95.0781 42.25 95.7344 41.8125C96.4219 41.375 97.0781 40.8438 97.7031 40.2188C98.3594 39.5938 98.9531 38.9531 99.4844 38.2969C100.047 37.6406 100.5 37.0938 100.844 36.6562ZM133.141 35.25C132.203 36.625 131.141 37.9688 129.953 39.2812C128.766 40.5625 127.5 41.7188 126.156 42.75C124.844 43.75 123.484 44.5625 122.078 45.1875C120.703 45.8125 119.359 46.125 118.047 46.125C117.359 46.125 116.609 45.9531 115.797 45.6094C115.016 45.2969 114.297 44.7969 113.641 44.1094C112.984 43.4219 112.453 42.5312 112.047 41.4375C111.672 40.3438 111.562 39.0156 111.719 37.4531C111.844 36.1719 112.234 34.8281 112.891 33.4219C113.578 31.9844 114.406 30.6719 115.375 29.4844C116.375 28.2969 117.484 27.3125 118.703 26.5312C119.953 25.75 121.203 25.3594 122.453 25.3594C123.641 25.3594 124.5 25.6562 125.031 26.25C125.562 26.8438 125.797 27.5781 125.734 28.4531C125.641 29.4219 125.359 30.3125 124.891 31.125C124.453 31.9375 123.922 32.6719 123.297 33.3281C122.672 33.9844 122 34.5781 121.281 35.1094C120.594 35.6406 119.938 36.125 119.312 36.5625C118.625 37.0312 117.969 37.4844 117.344 37.9219C116.719 38.3281 116.172 38.7031 115.703 39.0469C115.734 39.8281 115.875 40.4844 116.125 41.0156C116.375 41.5469 116.688 41.9844 117.062 42.3281C117.438 42.6406 117.859 42.875 118.328 43.0312C118.828 43.1562 119.328 43.2188 119.828 43.2188C120.891 43.2188 122 42.8906 123.156 42.2344C124.312 41.5469 125.438 40.7344 126.531 39.7969C127.656 38.8281 128.688 37.8281 129.625 36.7969C130.594 35.7656 131.391 34.875 132.016 34.125C132.234 33.875 132.453 33.7344 132.672 33.7031C132.922 33.6406 133.109 33.6719 133.234 33.7969C133.391 33.8906 133.469 34.0781 133.469 34.3594C133.469 34.6094 133.359 34.9062 133.141 35.25ZM121.141 28.0312C120.766 28.0312 120.312 28.2188 119.781 28.5938C119.281 28.9688 118.781 29.5156 118.281 30.2344C117.781 30.9219 117.312 31.7812 116.875 32.8125C116.438 33.8125 116.109 34.9688 115.891 36.2812C116.266 36 116.672 35.7188 117.109 35.4375C117.547 35.125 117.984 34.7969 118.422 34.4531C119.766 33.4219 120.703 32.5156 121.234 31.7344C121.766 30.9531 122.062 30.2812 122.125 29.7188C122.188 29.125 122.125 28.7031 121.938 28.4531C121.75 28.1719 121.484 28.0312 121.141 28.0312ZM143.5 36.6562C142.688 37.8438 141.844 39 140.969 40.125C140.125 41.25 139.297 42.2656 138.484 43.1719C137.703 44.0469 136.969 44.75 136.281 45.2812C135.625 45.8438 135.094 46.125 134.688 46.125C133.719 46.125 132.922 45.6719 132.297 44.7656C131.703 43.8281 131.234 42.6875 130.891 41.3438C130.578 39.9688 130.375 38.5156 130.281 36.9844C130.219 35.4219 130.234 34.0312 130.328 32.8125C130.453 31.5938 130.594 30.625 130.75 29.9062C130.906 29.1562 131.094 28.5781 131.312 28.1719C131.562 27.7656 131.844 27.4688 132.156 27.2812C132.5 27.0938 132.922 26.9375 133.422 26.8125C133.641 26.75 133.891 26.7031 134.172 26.6719C134.453 26.6406 134.703 26.6562 134.922 26.7188C135.172 26.75 135.359 26.8438 135.484 27C135.609 27.1562 135.625 27.3906 135.531 27.7031C135.469 27.9844 135.359 28.4062 135.203 28.9688C135.078 29.5 134.938 30.1094 134.781 30.7969C134.625 31.4844 134.469 32.2031 134.312 32.9531C134.188 33.7031 134.094 34.4219 134.031 35.1094C133.938 36.2969 133.938 37.3438 134.031 38.25C134.125 39.125 134.266 39.875 134.453 40.5C134.641 41.0938 134.844 41.5469 135.062 41.8594C135.281 42.1719 135.453 42.3281 135.578 42.3281C135.734 42.3281 136.016 42.125 136.422 41.7188C136.859 41.2812 137.344 40.7188 137.875 40.0312C138.438 39.3438 139.016 38.5469 139.609 37.6406C140.234 36.7344 140.812 35.7969 141.344 34.8281C141.156 34.3281 141.078 33.7344 141.109 33.0469C141.203 31.9844 141.438 31.0312 141.812 30.1875C142.188 29.3125 142.609 28.5781 143.078 27.9844C143.578 27.3906 144.078 26.9375 144.578 26.625C145.109 26.2812 145.578 26.1094 145.984 26.1094C146.797 26.1094 147.297 26.3281 147.484 26.7656C147.703 27.1719 147.781 27.5938 147.719 28.0312C147.656 28.6875 147.359 29.5938 146.828 30.75C146.328 31.875 145.672 33.1094 144.859 34.4531C145.016 34.5156 145.188 34.5781 145.375 34.6406C145.562 34.7031 145.781 34.7344 146.031 34.7344C147.094 34.7344 148.047 34.6094 148.891 34.3594C149.766 34.1094 150.516 33.8125 151.141 33.4688C151.797 33.125 152.344 32.7656 152.781 32.3906C153.25 31.9844 153.625 31.6562 153.906 31.4062C154.094 31.2188 154.281 31.125 154.469 31.125C154.656 31.125 154.812 31.1719 154.938 31.2656C155.062 31.3594 155.125 31.5 155.125 31.6875C155.125 31.875 155.031 32.0781 154.844 32.2969C153.719 33.6719 152.344 34.7812 150.719 35.625C149.125 36.4688 147.25 36.8906 145.094 36.8906C144.906 36.8906 144.672 36.875 144.391 36.8438C144.109 36.8125 143.812 36.75 143.5 36.6562ZM171.531 35.25C170.594 36.625 169.531 37.9688 168.344 39.2812C167.156 40.5625 165.891 41.7188 164.547 42.75C163.234 43.75 161.875 44.5625 160.469 45.1875C159.094 45.8125 157.75 46.125 156.438 46.125C155.75 46.125 155 45.9531 154.188 45.6094C153.406 45.2969 152.688 44.7969 152.031 44.1094C151.375 43.4219 150.844 42.5312 150.438 41.4375C150.062 40.3438 149.953 39.0156 150.109 37.4531C150.234 36.1719 150.625 34.8281 151.281 33.4219C151.969 31.9844 152.797 30.6719 153.766 29.4844C154.766 28.2969 155.875 27.3125 157.094 26.5312C158.344 25.75 159.594 25.3594 160.844 25.3594C162.031 25.3594 162.891 25.6562 163.422 26.25C163.953 26.8438 164.188 27.5781 164.125 28.4531C164.031 29.4219 163.75 30.3125 163.281 31.125C162.844 31.9375 162.312 32.6719 161.688 33.3281C161.062 33.9844 160.391 34.5781 159.672 35.1094C158.984 35.6406 158.328 36.125 157.703 36.5625C157.016 37.0312 156.359 37.4844 155.734 37.9219C155.109 38.3281 154.562 38.7031 154.094 39.0469C154.125 39.8281 154.266 40.4844 154.516 41.0156C154.766 41.5469 155.078 41.9844 155.453 42.3281C155.828 42.6406 156.25 42.875 156.719 43.0312C157.219 43.1562 157.719 43.2188 158.219 43.2188C159.281 43.2188 160.391 42.8906 161.547 42.2344C162.703 41.5469 163.828 40.7344 164.922 39.7969C166.047 38.8281 167.078 37.8281 168.016 36.7969C168.984 35.7656 169.781 34.875 170.406 34.125C170.625 33.875 170.844 33.7344 171.062 33.7031C171.312 33.6406 171.5 33.6719 171.625 33.7969C171.781 33.8906 171.859 34.0781 171.859 34.3594C171.859 34.6094 171.75 34.9062 171.531 35.25ZM159.531 28.0312C159.156 28.0312 158.703 28.2188 158.172 28.5938C157.672 28.9688 157.172 29.5156 156.672 30.2344C156.172 30.9219 155.703 31.7812 155.266 32.8125C154.828 33.8125 154.5 34.9688 154.281 36.2812C154.656 36 155.062 35.7188 155.5 35.4375C155.938 35.125 156.375 34.7969 156.812 34.4531C158.156 33.4219 159.094 32.5156 159.625 31.7344C160.156 30.9531 160.453 30.2812 160.516 29.7188C160.578 29.125 160.516 28.7031 160.328 28.4531C160.141 28.1719 159.875 28.0312 159.531 28.0312ZM167.453 44.25C168.828 38.4688 169.922 33.8281 170.734 30.3281C171.578 26.8281 172.219 24.1562 172.656 22.3125C173.156 20.125 173.5 18.6094 173.688 17.7656C173.781 17.1719 173.859 16.5938 173.922 16.0312C173.984 15.5313 174.016 15.0156 174.016 14.4844C174.016 13.9531 173.969 13.4688 173.875 13.0312C174.125 12.875 174.391 12.75 174.672 12.6562C174.984 12.5625 175.281 12.4844 175.562 12.4219C175.906 12.3281 176.25 12.25 176.594 12.1875C176.938 12.125 177.25 12.0938 177.531 12.0938C177.781 12.0938 178.016 12.125 178.234 12.1875C178.453 12.2187 178.594 12.3125 178.656 12.4688C178.844 12.625 178.922 12.9375 178.891 13.4062C178.891 13.875 178.859 14.3594 178.797 14.8594C178.672 15.4531 178.531 16.0938 178.375 16.7812C178 18.125 177.484 20.0625 176.828 22.5938C176.266 24.75 175.5 27.6875 174.531 31.4062C173.594 35.125 172.406 39.8125 170.969 45.4688C170.812 45.625 170.625 45.7344 170.406 45.7969C170.188 45.8594 169.984 45.8906 169.797 45.8906C169.578 45.8906 169.344 45.875 169.094 45.8438C168.875 45.7812 168.656 45.6875 168.438 45.5625C168.25 45.4375 168.062 45.2656 167.875 45.0469C167.688 44.8594 167.547 44.5938 167.453 44.25ZM192.531 37.5469C192.219 38.7344 191.797 39.8438 191.266 40.875C190.734 41.9062 190.094 42.7969 189.344 43.5469C188.625 44.2969 187.797 44.875 186.859 45.2812C185.953 45.7188 184.953 45.9375 183.859 45.9375C182.578 45.9375 181.562 45.6562 180.812 45.0938C180.094 44.5625 179.547 43.8906 179.172 43.0781C178.828 42.2656 178.625 41.375 178.562 40.4062C178.469 39.4375 178.422 38.5312 178.422 37.6875C178.422 37.0938 178.5 36.4375 178.656 35.7188C178.781 35 178.969 34.2656 179.219 33.5156C179.469 32.7656 179.781 32.0156 180.156 31.2656C180.562 30.5156 181.031 29.8281 181.562 29.2031C181.75 28.6719 182.031 28.2031 182.406 27.7969C182.812 27.3906 183.266 27.0625 183.766 26.8125C184.297 26.5312 184.859 26.3281 185.453 26.2031C186.047 26.0469 186.625 25.9688 187.188 25.9688C187.281 25.9688 187.359 25.9844 187.422 26.0156C187.516 26.0469 187.609 26.0781 187.703 26.1094C188.109 26.1406 188.609 26.2969 189.203 26.5781C189.828 26.8594 190.422 27.2812 190.984 27.8438C191.578 28.4062 192.078 29.125 192.484 30C192.891 30.8438 193.094 31.875 193.094 33.0938C193.094 33.3438 193.078 33.6562 193.047 34.0312C193.016 34.375 192.984 34.6719 192.953 34.9219C193.672 34.6406 194.422 34.2969 195.203 33.8906C195.984 33.4844 196.734 33.0625 197.453 32.625C198.203 32.1562 198.891 31.6875 199.516 31.2188C200.141 30.75 200.641 30.3281 201.016 29.9531C201.328 29.6719 201.594 29.5156 201.812 29.4844C202.031 29.4531 202.188 29.5156 202.281 29.6719C202.375 29.8281 202.391 30.0469 202.328 30.3281C202.266 30.6094 202.094 30.9219 201.812 31.2656C201.656 31.4531 201.25 31.8281 200.594 32.3906C199.969 32.9531 199.219 33.5625 198.344 34.2188C197.469 34.875 196.516 35.5156 195.484 36.1406C194.453 36.7656 193.469 37.2344 192.531 37.5469ZM184.609 30.4219C184.516 30.7031 184.469 31 184.469 31.3125C184.469 31.8125 184.5 32.3438 184.562 32.9062C184.625 33.4375 184.781 33.9219 185.031 34.3594C185.281 34.7969 185.672 35.1719 186.203 35.4844C186.766 35.7656 187.531 35.9062 188.5 35.9062C188.656 35.9062 188.812 35.9062 188.969 35.9062C189.125 35.875 189.281 35.8438 189.438 35.8125C189.531 35.4062 189.609 35.0469 189.672 34.7344C189.766 34.3906 189.812 34.0938 189.812 33.8438C189.875 33.25 189.875 32.6406 189.812 32.0156C189.75 31.3906 189.625 30.8281 189.438 30.3281C189.281 29.7969 189.062 29.375 188.781 29.0625C188.531 28.7188 188.219 28.5469 187.844 28.5469C187.25 28.5469 186.672 28.7188 186.109 29.0625C185.578 29.375 185.078 29.8281 184.609 30.4219ZM181.609 38.6719C181.609 39.2344 181.641 39.7969 181.703 40.3594C181.766 40.8906 181.891 41.375 182.078 41.8125C182.266 42.2188 182.516 42.5625 182.828 42.8438C183.141 43.0938 183.547 43.2188 184.047 43.2188C184.609 43.2188 185.125 43.0938 185.594 42.8438C186.062 42.5625 186.484 42.2188 186.859 41.8125C187.234 41.375 187.562 40.8906 187.844 40.3594C188.156 39.7969 188.422 39.2188 188.641 38.625C188.422 38.6562 188.203 38.6875 187.984 38.7188C187.797 38.7188 187.578 38.7188 187.328 38.7188C186.141 38.7188 185.109 38.375 184.234 37.6875C183.391 36.9688 182.734 36.0625 182.266 34.9688C182.078 35.625 181.922 36.2656 181.797 36.8906C181.672 37.5156 181.609 38.1094 181.609 38.6719ZM194.172 65.0156C193.953 64.9219 193.734 64.7812 193.516 64.5938C193.328 64.4375 193.141 64.2344 192.953 63.9844C192.766 63.7656 192.609 63.4844 192.484 63.1406C193.359 59.7969 194.109 56.8906 194.734 54.4219C195.328 51.9531 195.844 49.8906 196.281 48.2344C196.75 46.2969 197.156 44.6719 197.5 43.3594C197.812 42.1094 198.125 40.8594 198.438 39.6094C198.688 38.5156 198.953 37.3438 199.234 36.0938C199.547 34.8438 199.828 33.6719 200.078 32.5781C200.391 31.3594 200.578 30.3906 200.641 29.6719C200.703 28.9219 200.469 28.2812 199.938 27.75C200.312 27.4375 200.688 27.2031 201.062 27.0469C201.469 26.8594 201.828 26.7344 202.141 26.6719C202.484 26.5781 202.828 26.5469 203.172 26.5781C204.016 26.6406 204.531 26.9062 204.719 27.375C204.938 27.8438 204.969 28.5938 204.812 29.625C204.781 29.7812 204.75 29.9219 204.719 30.0469C204.719 30.1406 204.719 30.25 204.719 30.375C205.156 29.875 205.641 29.3906 206.172 28.9219C206.703 28.4531 207.234 28.0312 207.766 27.6562C208.328 27.2812 208.891 26.9844 209.453 26.7656C210.047 26.5156 210.609 26.3906 211.141 26.3906C211.859 26.3906 212.438 26.5781 212.875 26.9531C213.344 27.2969 213.703 27.7656 213.953 28.3594C214.203 28.9531 214.359 29.625 214.422 30.375C214.484 31.0938 214.5 31.8125 214.469 32.5312C214.438 33.3125 214.297 34.1406 214.047 35.0156C213.828 35.8906 213.516 36.7812 213.109 37.6875C212.703 38.5938 212.234 39.4844 211.703 40.3594C211.172 41.2344 210.609 42.0469 210.016 42.7969C210.141 42.8281 210.219 42.8594 210.25 42.8906C210.281 42.8906 210.297 42.9062 210.297 42.9375C210.297 42.9375 210.312 42.9531 210.344 42.9844C210.406 42.9844 210.516 42.9844 210.672 42.9844C211.391 42.9844 212.125 42.7969 212.875 42.4219C213.625 42.0469 214.359 41.5781 215.078 41.0156C215.797 40.4219 216.484 39.7812 217.141 39.0938C217.828 38.4062 218.438 37.75 218.969 37.125C219.531 36.4688 220 35.8906 220.375 35.3906C220.75 34.8594 221.031 34.4844 221.219 34.2656C221.469 33.9531 221.703 33.75 221.922 33.6562C222.141 33.5312 222.312 33.5156 222.438 33.6094C222.562 33.7031 222.625 33.8906 222.625 34.1719C222.625 34.4219 222.531 34.75 222.344 35.1562C222.219 35.4375 221.953 35.8906 221.547 36.5156C221.141 37.1406 220.641 37.8438 220.047 38.625C219.453 39.4062 218.766 40.2188 217.984 41.0625C217.234 41.9062 216.438 42.6719 215.594 43.3594C214.75 44.0469 213.875 44.6094 212.969 45.0469C212.094 45.5156 211.234 45.75 210.391 45.75C209.984 45.75 209.656 45.7344 209.406 45.7031C209.156 45.6719 208.938 45.6094 208.75 45.5156C208.594 45.4531 208.438 45.375 208.281 45.2812C208.125 45.2188 207.938 45.1406 207.719 45.0469C207.156 45.4844 206.578 45.8125 205.984 46.0312C205.391 46.2812 204.812 46.4062 204.25 46.4062C203.719 46.4062 203.25 46.3125 202.844 46.125C202.469 45.9688 202.156 45.7344 201.906 45.4219C201.656 45.1406 201.453 44.8281 201.297 44.4844C201.141 44.1094 201.016 43.75 200.922 43.4062C200.891 43.5312 200.859 43.6406 200.828 43.7344C200.828 43.8281 200.812 43.9531 200.781 44.1094C200.406 45.6094 200.016 47.3438 199.609 49.3125C199.266 51 198.844 53.0469 198.344 55.4531C197.875 57.8906 197.375 60.6562 196.844 63.75C196.656 64.5938 196.328 65.0781 195.859 65.2031C195.359 65.3281 194.797 65.2656 194.172 65.0156ZM202.75 35.9531C202.594 36.4844 202.422 37.1094 202.234 37.8281C202.078 38.5156 201.891 39.3438 201.672 40.3125C201.922 40.125 202.203 39.9844 202.516 39.8906C202.828 39.7969 203.141 39.75 203.453 39.75C203.797 39.75 204.234 39.9375 204.766 40.3125C205.297 40.6562 205.938 41.0312 206.688 41.4375C207.156 40.875 207.641 40.25 208.141 39.5625C208.672 38.8438 209.141 38.1094 209.547 37.3594C209.984 36.6094 210.344 35.8438 210.625 35.0625C210.938 34.2812 211.109 33.5312 211.141 32.8125C211.203 31.875 211.094 31.1406 210.812 30.6094C210.531 30.0781 210.062 29.8125 209.406 29.8125C208.438 29.8125 207.375 30.3906 206.219 31.5469C205.094 32.6719 203.938 34.1406 202.75 35.9531ZM240.438 35.25C239.5 36.625 238.438 37.9688 237.25 39.2812C236.062 40.5625 234.797 41.7188 233.453 42.75C232.141 43.75 230.781 44.5625 229.375 45.1875C228 45.8125 226.656 46.125 225.344 46.125C224.656 46.125 223.906 45.9531 223.094 45.6094C222.312 45.2969 221.594 44.7969 220.938 44.1094C220.281 43.4219 219.75 42.5312 219.344 41.4375C218.969 40.3438 218.859 39.0156 219.016 37.4531C219.141 36.1719 219.531 34.8281 220.188 33.4219C220.875 31.9844 221.703 30.6719 222.672 29.4844C223.672 28.2969 224.781 27.3125 226 26.5312C227.25 25.75 228.5 25.3594 229.75 25.3594C230.938 25.3594 231.797 25.6562 232.328 26.25C232.859 26.8438 233.094 27.5781 233.031 28.4531C232.938 29.4219 232.656 30.3125 232.188 31.125C231.75 31.9375 231.219 32.6719 230.594 33.3281C229.969 33.9844 229.297 34.5781 228.578 35.1094C227.891 35.6406 227.234 36.125 226.609 36.5625C225.922 37.0312 225.266 37.4844 224.641 37.9219C224.016 38.3281 223.469 38.7031 223 39.0469C223.031 39.8281 223.172 40.4844 223.422 41.0156C223.672 41.5469 223.984 41.9844 224.359 42.3281C224.734 42.6406 225.156 42.875 225.625 43.0312C226.125 43.1562 226.625 43.2188 227.125 43.2188C228.188 43.2188 229.297 42.8906 230.453 42.2344C231.609 41.5469 232.734 40.7344 233.828 39.7969C234.953 38.8281 235.984 37.8281 236.922 36.7969C237.891 35.7656 238.688 34.875 239.312 34.125C239.531 33.875 239.75 33.7344 239.969 33.7031C240.219 33.6406 240.406 33.6719 240.531 33.7969C240.688 33.8906 240.766 34.0781 240.766 34.3594C240.766 34.6094 240.656 34.9062 240.438 35.25ZM228.438 28.0312C228.062 28.0312 227.609 28.2188 227.078 28.5938C226.578 28.9688 226.078 29.5156 225.578 30.2344C225.078 30.9219 224.609 31.7812 224.172 32.8125C223.734 33.8125 223.406 34.9688 223.188 36.2812C223.562 36 223.969 35.7188 224.406 35.4375C224.844 35.125 225.281 34.7969 225.719 34.4531C227.062 33.4219 228 32.5156 228.531 31.7344C229.062 30.9531 229.359 30.2812 229.422 29.7188C229.484 29.125 229.422 28.7031 229.234 28.4531C229.047 28.1719 228.781 28.0312 228.438 28.0312ZM235.281 44.7656C235.062 45.1094 234.828 45.3281 234.578 45.4219C234.297 45.5469 234.062 45.5625 233.875 45.4688C233.656 45.4062 233.516 45.25 233.453 45C233.391 44.75 233.453 44.4375 233.641 44.0625C233.734 43.875 233.953 43.4531 234.297 42.7969C234.609 42.1406 235 41.3594 235.469 40.4531C235.906 39.5156 236.391 38.5156 236.922 37.4531C237.453 36.3594 237.953 35.3281 238.422 34.3594C238.922 33.3906 239.375 32.5312 239.781 31.7812C240.188 31 240.484 30.4375 240.672 30.0938C240.328 29.7812 240.094 29.5625 239.969 29.4375C239.844 29.2812 239.75 28.9688 239.688 28.5C239.625 28.0938 239.719 27.5625 239.969 26.9062C240.219 26.25 240.547 25.625 240.953 25.0312C241.359 24.4062 241.812 23.875 242.312 23.4375C242.812 23 243.297 22.7812 243.766 22.7812C244.641 22.7812 245.25 23.0625 245.594 23.625C245.969 24.1875 246.188 24.7656 246.25 25.3594C246.312 25.7656 246.281 26.2812 246.156 26.9062C246.031 27.5312 245.797 28.0938 245.453 28.5938C245.547 28.6562 245.672 28.7344 245.828 28.8281C245.984 28.8906 246.234 28.9219 246.578 28.9219C247.078 28.9219 247.422 28.8906 247.609 28.8281C247.828 28.7656 248.156 28.7344 248.594 28.7344C249.125 28.7344 249.562 28.875 249.906 29.1562C250.25 29.4062 250.531 29.7344 250.75 30.1406C250.969 30.5156 251.125 30.9375 251.219 31.4062C251.344 31.8438 251.422 32.25 251.453 32.625C251.547 33.4062 251.344 34.2188 250.844 35.0625C250.344 35.9062 249.734 36.8281 249.016 37.8281C248.578 38.4531 248.141 39.1562 247.703 39.9375C247.266 40.7188 247.078 41.4219 247.141 42.0469C247.203 42.4531 247.312 42.7812 247.469 43.0312C247.625 43.2812 248.062 43.4062 248.781 43.4062C249.312 43.4062 249.891 43.2188 250.516 42.8438C251.172 42.4375 251.828 41.9375 252.484 41.3438C253.172 40.7188 253.844 40.0469 254.5 39.3281C255.156 38.5781 255.766 37.8594 256.328 37.1719C256.891 36.4531 257.359 35.8125 257.734 35.25C258.141 34.6875 258.438 34.2812 258.625 34.0312C258.781 33.7812 258.984 33.6094 259.234 33.5156C259.484 33.4219 259.703 33.4219 259.891 33.5156C260.078 33.6094 260.188 33.7969 260.219 34.0781C260.281 34.3594 260.172 34.7344 259.891 35.2031C259.703 35.5156 259.375 36.0156 258.906 36.7031C258.469 37.3906 257.922 38.1562 257.266 39C256.641 39.8438 255.938 40.7188 255.156 41.625C254.375 42.5 253.547 43.3125 252.672 44.0625C251.828 44.7812 250.969 45.375 250.094 45.8438C249.25 46.3125 248.438 46.5469 247.656 46.5469C246.844 46.5469 246.172 46.3906 245.641 46.0781C245.109 45.7656 244.672 45.3906 244.328 44.9531C244.016 44.4844 243.781 43.9844 243.625 43.4531C243.5 42.8906 243.453 42.375 243.484 41.9062C243.516 41.5312 243.609 41.1406 243.766 40.7344C243.953 40.2969 244.156 39.8594 244.375 39.4219C244.625 38.9531 244.875 38.5 245.125 38.0625C245.406 37.5938 245.656 37.1406 245.875 36.7031C246.406 35.7969 246.828 35.0312 247.141 34.4062C247.484 33.75 247.656 33.2031 247.656 32.7656C247.656 32.4844 247.594 32.2344 247.469 32.0156C247.344 31.7969 247.141 31.6875 246.859 31.6875C246.672 31.6875 246.531 31.7031 246.438 31.7344C246.375 31.7344 246.297 31.7344 246.203 31.7344C246.141 31.7344 246.031 31.75 245.875 31.7812C245.75 31.7812 245.547 31.7812 245.266 31.7812C244.859 31.7812 244.516 31.7188 244.234 31.5938C243.953 31.4688 243.688 31.375 243.438 31.3125C243.312 31.5312 243.031 32 242.594 32.7188C242.156 33.4375 241.641 34.2812 241.047 35.25C240.484 36.2188 239.875 37.2344 239.219 38.2969C238.594 39.3594 238 40.3594 237.438 41.2969C236.875 42.2031 236.406 42.9844 236.031 43.6406C235.625 44.2656 235.375 44.6406 235.281 44.7656Z" fill="#FF059B"/>
    <path d="M277.127 17.8862C277.596 18.3135 278.356 18.3135 278.825 17.8862L279.673 17.1131C280.142 16.6858 280.142 15.9934 279.673 15.5661L276.994 13.125L279.672 10.6832C280.141 10.256 280.141 9.56348 279.672 9.13623L278.824 8.36309C278.355 7.93584 277.595 7.93584 277.127 8.36309L272.751 12.3512C272.282 12.7784 272.282 13.4709 272.751 13.8981L277.127 17.8862V17.8862ZM284.328 17.1138L285.176 17.8869C285.645 18.3142 286.405 18.3142 286.874 17.8869L291.249 13.8988C291.718 13.4716 291.718 12.7791 291.249 12.3519L286.874 8.36377C286.405 7.93652 285.645 7.93652 285.176 8.36377L284.328 9.13691C283.859 9.56416 283.859 10.2566 284.328 10.6839L287.006 13.125L284.328 15.5668C283.859 15.994 283.859 16.6865 284.328 17.1138V17.1138ZM304.8 28.4375H286.616C286.56 29.7917 285.512 30.625 284.16 30.625H279.6C278.198 30.625 277.124 29.4308 277.142 28.4375H259.2C258.54 28.4375 258 28.9297 258 29.5312V30.625C258 33.0313 260.16 35 262.8 35H301.2C303.84 35 306 33.0313 306 30.625V29.5312C306 28.9297 305.46 28.4375 304.8 28.4375ZM301.2 3.28125C301.2 1.47656 299.58 0 297.6 0H266.4C264.42 0 262.8 1.47656 262.8 3.28125V26.25H301.2V3.28125ZM296.4 21.875H267.6V4.375H296.4V21.875Z" fill="#FF059B"/>
    </svg>
  </SvgWrapper>
    
  )
}
