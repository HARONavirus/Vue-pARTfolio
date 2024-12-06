<script setup>
import { ref, onMounted } from 'vue';

const skills = ['Vue.js', 'Nuxt.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Git'];
const topRowSkills = ['Vue.js', 'Nuxt.js', 'TypeScript', 'HTML'];
const bottomRowSkills = ['JavaScript', 'CSS', 'Git'];
const width = ref(0);

onMounted(() => {
  width.value = window.innerWidth;
  window.addEventListener('resize', () => {
    width.value = window.innerWidth;
  });
});
</script>

<template>
  <div class="container">
    <div class="info__block">
      <div class="name__block">
        <p class="name__block-text">Artyom Bochkar</p>
      </div>
      <div class="profession__block">
        <p class="profession__block-name">Frontend Developer</p>
      </div>
      <div class="skillsTitle__block">
        <p class="skillsTitle__block-text">Skills</p>
      </div>
      <div class="skills__block">
        <div v-if="width > 600"  class="skills__block-row">
          <div v-for="(skill, index) in skills" :key="index" class="skills__block-items">
            <p class="skills__block-text">{{ skill }}</p>
          </div>
        </div>
        <div v-else>
          <div class="skills__row">
            <div v-for="skill in topRowSkills" :key="skill" class="skills__block-items">
              <p class="skills__block-text">{{ skill }}</p>
            </div>
          </div>
          <div class="skills__row">
            <div v-for="skill in bottomRowSkills" :key="skill" class="skills__block-items">
              <p class="skills__block-text">{{ skill }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="links__block">
      <div class="links">
        <a href="https://github.com/HARONavirus" target="_blank" rel="noopener noreferrer">
          <img class="links__github-image" src="../assets/svg/github-svgrepo-com-2.svg" alt="GitHub">
        </a>
        <a href="https://t.me/artusick" target="_blank" rel="noopener noreferrer">
          <img class="links__telegram-image" src="../assets/svg/telegram-svgrepo-com.svg" alt="Telegram">
        </a>
        <a href="../assets/pdf/Резюме_Бочкарь_А.А.pdf" target="_blank" rel="noopener noreferrer">
          <img class="links__resume-image" src="../assets/svg/resume-4-svgrepo-com.svg" alt="Resume">
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Marcellus+SC&family=PT+Sans+Caption:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Mali:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&family=Marcellus+SC&family=PT+Sans+Caption:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Mali:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&family=Marcellus+SC&family=PT+Sans+Caption:wght@400;700&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=PT+Sans+Caption:wght@400;700&display=swap');

.container {
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100%;
}

.info__block {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.name__block {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #d9d9d9;
  width: 690px;
  height: 150px;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 30px;
  margin-bottom: 10px;
}

.name__block-text {
  text-align: center;
  font-family: "Marcellus SC", serif;
  font-weight: 400;
  font-style: normal;
  font-size: 80px;
  color: #d9d9d9;
}

.profession__block {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #d9d9d9;
  width: 439px;
  height: 96px;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 30px;
  margin-bottom: 10px;
}

.profession__block-name {
  font-family: "Mali", cursive;
  font-weight: 400;
  font-style: normal;
  font-size: 40px;
  color: #d9d9d9;
}

.skillsTitle__block {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #d9d9d9;
  width: 144px;
  height: 66px;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 25px;
  margin-bottom: 10px;
}

.skillsTitle__block-text {
  font-family: "Raleway", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-size: 30px;
  color: #d9d9d9;
}

.skills__block {
  margin-bottom: 50px;
}

.skills__row {
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 7px;

}

.skills__block-row{
  display: flex;
  flex-direction: row;
  gap: 7px;
}

.skills__block-items {
  background-color: #d9d9d9;
  border: 2px solid #2aadd9;
  border-radius: 90px;
  text-align: center;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  min-width: 50px;
  flex-shrink: 1;
}

.skills__block-text {
  font-family: "PT Sans Caption", serif;
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  color: black;
}

.links {
  display: flex;
  flex-direction: row;
  bottom: 0;
  gap: 24px;
  align-items: center;
  justify-content: center;
  border: 1px solid #d9d9d9;
  width: 214px;
  height: 60px;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 25px;
}

.links__github-image {
  height: 40px;
  width: 40px;
  opacity: 80%;
  cursor: pointer;
  transition: transform 0.1s ease-in-out;

  &:hover {
    opacity: 1;
	}

  &:active {
    transform: scale(0.9);
  }
}

.links__telegram-image {
  height: 45px;
  width: 40px;
  opacity: 80%;
  cursor: pointer;
  transition: transform 0.1s ease-in-out;

  &:hover {
    opacity: 1;
	}

  &:active {
    transform: scale(0.9);
  }
}

.links__resume-image {
  height: 40px;
  width: 40px;
  opacity: 80%;
  cursor: pointer;
  transition: transform 0.1s ease-in-out;

  &:hover {
    opacity: 1;
	}

  &:active {
    transform: scale(0.9);
  }
}

@media (max-width: 768px) {
  .name__block {
    width: 580px;
    height: 107px;
  }

  .name__block-text {
    font-size: 60px;
  }

  .profession__block {
    width: 359px;
    height: 68px;
  }

  .profession__block-name {
    font-size: 30px;
  }

  .skillsTitle__block {
    width: 99px;
    height: 45px;
  }

  .skillsTitle__block-text {
    font-size: 20px;
  }

  .skills__block-row {
    gap: 4px;
  }

  .skills__block-items {
    height: 38px;
    min-width: 30px;
  }

  .skills__block-text {
    font-size: 16px;
  }

  .links {
    gap: 16px;
    width: 170px;
    height: 57px;
  }

  .links__github-image {
    height: 30px;
    width: 30px;
  }

  .links__telegram-image {
    height: 35px;
    width: 30px;
  }

  .links__resume-image {
    height: 30px;
    width: 30px;
  }
}

@media (max-width: 600px) {
  .name__block {
    width: 215px;
    height: 131px;
  }

  .name__block-text {
    font-size: 40px;
  }

  .profession__block {
    width: 251px;
    height: 47px;
  }

  .profession__block-name {
    font-size: 22px;
  }

  .skillsTitle__block {
    width: 84px;
    height: 43px;
  }

  .skillsTitle__block-text {
    font-size: 18px;
  }

  .skills__block-row {
    gap: 4px;
  }

  .skills__block-items {
    height: 38px;
    min-width: 30px;
  }

  .skills__block-text {
    font-size: 16px;
  }

  .links__block {
    position: absolute;
    bottom: 21px;
  }

  .links {
    gap: 16px;
    width: 170px;
    height: 57px;
  }

  .links__github-image {
    height: 30px;
    width: 30px;
  }

  .links__telegram-image {
    height: 35px;
    width: 30px;
  }

  .links__resume-image {
    height: 30px;
    width: 30px;
  }
}
</style>