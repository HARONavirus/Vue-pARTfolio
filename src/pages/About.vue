<script setup>

</script>

<template>
    <div class="container">
        <div class="info__block">
            <div class="location__block"></div>
            <div class="education__block"></div>
            <div class="skills__block"></div>
            <div class="workExperience__block-1"></div>
            <div class="workExperience__block-2"></div>
            <div class="workExperience__block-3"></div>
            <div class="contacts__block"></div>
        </div>
    </div>
</template>

<style scoped>
.container {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100%;
}

.info__block {
    display: flex;
    flex-wrap: wrap;
    overflow-y: auto;
    width: 1455px;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    padding-bottom: 35px;
    padding-top: 35px;
}

.location__block {
    width: 675px;
    height: 716px;
    background-color: #d9d9d9;
    border: 1px solid black;
    border-radius: 30px;
    margin-left: 35px;
}

.education__block {
    width: 675px;
    height: 716px;
    background-color: #d9d9d9;
    border: 1px solid black;
    border-radius: 30px;
    margin-left: 35px;
}

.skills__block {
    width: 1385px;
    height: 674px;
    background-color: #d9d9d9;
    border: 1px solid black;
    border-radius: 30px;
    margin-left: 35px;
    margin-top: 35px;
}

.workExperience__block-1 {
    width: 675px;
    height: 440px;
    background-color: #d9d9d9;
    border: 1px solid black;
    border-radius: 30px;
    margin-left: 35px;
    margin-top: 35px;
}

.workExperience__block-2 {
    width: 675px;
    height: 440px;
    background-color: #d9d9d9;
    border: 1px solid black;
    border-radius: 30px;
    margin-left: 35px;
    margin-top: 35px;
}

.workExperience__block-3 {
    width: 950px;
    height: 397px;
    background-color: #d9d9d9;
    border: 1px solid black;
    border-radius: 30px;
    margin-left: 35px;
    margin-top: 35px;
}

.contacts__block {
    width: 400px;
    height: 397px;
    background-color: #d9d9d9;
    border: 1px solid black;
    border-radius: 30px;
    margin-left: 35px;
    margin-top: 35px;
}

@media (max-width: 1599px) {
    .info__block {
        width: 1000px;
        padding-bottom: 35px;
        padding-top: 35px;
    }

    .location__block {
        width: 930px;
        height: 397px;
    }

    .education__block {
        width: 930px;
        height: 397px;
        margin-top: 35px;
    }

    .skills__block {
        width: 930px;
        height: 674px;
    }

    .workExperience__block-1 {
        width: 930px;
        height: 397px;
    }

    .workExperience__block-2 {
        width: 930px;
        height: 397px;
    }

    .workExperience__block-3 {
        width: 930px;
        height: 397px;
    }

    .contacts__block {
        width: 930px;
        height: 397px;
    }
}

@media (max-width: 1299px) {
    .info__block {
        width: 100%;
        padding-bottom: 15px;
        padding-top: 15px;
    }

    .location__block {
        width: calc(100% - 30px);
        height: 325px;
        margin: 0 0 15px 15px;
    }

    .education__block {
        width: calc(100% - 30px);
        height: 321px;
        margin-top: 35px;
        margin: 0 0 15px 15px;
    }

    .skills__block {
        width: calc(100% - 30px);
        height: 674px;
        margin: 0 0 15px 15px;
    }

    .workExperience__block-1 {
        width: calc(100% - 30px);
        height: 390px;
        margin: 0 0 15px 15px;
    }

    .workExperience__block-2 {
        width: calc(100% - 30px);
        height: 390px;
        margin: 0 0 15px 15px;
    }

    .workExperience__block-3 {
        width: calc(100% - 30px);
        height: 390px;
        margin: 0 0 15px 15px;
    }

    .contacts__block {
        width: calc(100% - 30px);
        height: 328px;
        margin: 0 0 0 15px;
    }
}

@media (max-width: 600px) {
    .info__block {
        width: 100%;
        padding-top: 10px;
        padding-bottom: 10px;
    }

    .location__block {
        width: 100%;
        height: 400px;
        margin: 0 0 10px 0;
    }

    .education__block {
        width: 100%;
        height: 504px;
        margin-top: 35px;
        margin: 0 0 10px 0;
    }

    .skills__block {
        width: 100%;
        height: 674px;
        margin: 0 0 10px 0;
    }

    .workExperience__block-1 {
        width: 100%;
        height: 537px;
        margin: 0 0 10px 0;
    }

    .workExperience__block-2 {
        width: 100%;
        height: 546px;
        margin: 0 0 10px 0;
    }

    .workExperience__block-3 {
        width: 100%;
        height: 530px;
        margin: 0 0 10px 0;
    }

    .contacts__block {
        width: 100%;
        height: 328px;
        margin: 0;
    }
}

</style>