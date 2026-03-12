<template>
  <!-- Hero section -->
  <header id="hero">
    <div class="px-4 py-5 my-5 text-center">
      <h1 class="display-5 fw-bold text-body-emphasis">
        KISS Enterprise Solutions
      </h1>
      <div class="col-lg-6 mx-auto">
        <p class="lead mb-4">
          Разрабатываем корпоративные системы, которые упрощают бизнес-процессы
        </p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <a href="#contact" class="btn btn-primary btn-lg px-4 gap-3">
            Связаться с нами
          </a>
          <a href="#services" class="btn btn-outline-secondary btn-lg px-4">
            Узнать больше
          </a>
        </div>
      </div>
    </div>
  </header>

  <hr />

  <!-- Features -->
  <section id="services">
    <div class="container px-4 py-5">
      <div class="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
        <div class="col d-flex flex-column align-items-start gap-2">
          <h2 class="fw-bold text-body-emphasis">Спектр услуг</h2>
          <p class="text-body-secondary">
            Мы предоставляем спектр различных услуг по разработке и поддержке
            информационных систем для вашего бизнеса
          </p>
        </div>
        <div class="col">
          <div class="row row-cols-1 row-cols-sm-2 g-4">
            <div class="col d-flex flex-column gap-2">
              <h4 class="fw-semibold mb-0 text-body-emphasis">
                Разработка профильных веб-систем
              </h4>
              <p class="text-body-secondary">
                CRM, системы учета, аналитические панели, системы автоматизации
              </p>
            </div>
            <div class="col d-flex flex-column gap-2">
              <h4 class="fw-semibold mb-0 text-body-emphasis">
                Разработка внутренних порталов
              </h4>
              <p class="text-body-secondary">
                портал сотрудников, клиентские кабинеты, базы знаний,
                сервис-порталы
              </p>
            </div>
            <div class="col d-flex flex-column gap-2">
              <h4 class="fw-semibold mb-0 text-body-emphasis">
                Размещение и обслуживание в облаке
              </h4>
              <p class="text-body-secondary">
                VPS / cloud deployment, мониторинг, обновления, резервное
                копирование
              </p>
            </div>
            <div class="col d-flex flex-column gap-2">
              <h4 class="fw-semibold mb-0 text-body-emphasis">
                On-premise решения
              </h4>
              <p class="text-body-secondary">
                поставка и внедрение систем, размещение внутри инфраструктуры
                предприятия, настройка и сопровождение
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <hr />

  <!-- Tech platform -->
  <section id="platform">
    <div class="text-center mx-auto">
      <h1 class="fw-semibold display-5">Наша технологическая платформа</h1>
    </div>
    <div class="row my-5">
      <div class="col text-center mx-auto">
        <a href="https://www.typescriptlang.org/">
          <img
            src="/typescript-logo.png"
            alt="TypeScript logo"
            style="height: 100px"
          />
        </a>
      </div>
      <div class="col text-center mx-auto">
        <a href="https://nestjs.com/">
          <img src="/nest-logo.png" alt="NestJS logo" style="height: 100px" />
        </a>
      </div>
      <div class="col text-center mx-auto">
        <a href="https://nuxt.com/">
          <img src="/nuxt-logo.png" alt="Nuxt logo" style="height: 100px" />
        </a>
      </div>
      <div class="col text-center mx-auto">
        <a href="https://www.postgresql.org/">
          <img
            src="/postgresql-logo.png"
            alt="PostgreSQL logo"
            style="height: 100px"
          />
        </a>
      </div>
      <div class="col text-center mx-auto">
        <a href="https://www.docker.com/">
          <img src="/docker-logo.png" alt="Docker logo" style="height: 100px" />
        </a>
      </div>
      <div class="col text-center mx-auto">
        <a href="https://kernel.org/">
          <img src="/linux-logo.png" alt="Linux logo" style="height: 100px" />
        </a>
      </div>
    </div>
  </section>

  <hr />

  <!-- Contact form -->
  <section id="contact">
    <div class="container col-xl-10 col-xxl-8 px-4 py-5">
      <div class="row align-items-center g-lg-5 py-5">
        <div class="col-lg-7 text-center text-lg-start">
          <h1 class="display-4 fw-bold lh-1 text-body-emphasis mb-3">
            Оставьте заявку на консультацию
          </h1>
          <p class="col-lg-10 fs-4">
            Мы свяжемся с вами, чтобы обсудить все интересующие вас вопросы и
            подобрать решения, подходящие именно вашему бизнесу
          </p>
        </div>
        <div class="col-md-10 mx-auto col-lg-5">
          <form class="p-4 p-md-5 border rounded-3 bg-body-tertiary">
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control"
                id="clientName"
                placeholder="Иванов Иван Иванович"
              />
              <label for="clientName">Ваше имя</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control"
                id="clientEmail"
                placeholder="johndoe@example.com"
              />
              <label for="clientEmail">Ваша почта</label>
            </div>
            <button class="w-100 btn btn-lg btn-primary" type="submit">
              Записаться на консультацию
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>

  <hr />

  <!-- Footer -->
  <footer id="footer">
    <div class="container">
      <div class="py-3 my-4">
        <p class="text-center text-body-secondary">
          © 2026 KISS Enterprise Solutions
        </p>
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts"></script>
