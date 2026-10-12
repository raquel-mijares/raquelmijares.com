<script setup lang="ts">
import { ArrowUpRight, Mail } from 'lucide-vue-next'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
</script>

<template>
  <header class="col hero">
    <div class="id">
      <Avatar class="avatar">
        <AvatarImage src="/images/raquel.webp" alt="Portrait of Raquel Mijares" width="72" height="72" />
        <AvatarFallback :delay-ms="800">RM</AvatarFallback>
      </Avatar>
      <div>
        <h1 class="vt-name">Raquel Mijares</h1>
        <p class="muted">Senior Software Developer, Calgary</p>
      </div>
    </div>
    <p class="headline">
      I build the parts of a product that have to be right: payments, privacy, and the screens
      people use every day.
    </p>
    <div class="ctas">
      <Button as="a" href="mailto:raquelmjrs@gmail.com">
        <Mail aria-hidden="true" />
        Email me
      </Button>
      <Button as="a" variant="ghost" href="https://www.linkedin.com/in/raquelmjrs/" rel="noopener">
        LinkedIn
        <ArrowUpRight aria-hidden="true" />
      </Button>
      <Button as="a" variant="ghost" href="https://github.com/raquel-mijares" rel="noopener">
        GitHub
        <ArrowUpRight aria-hidden="true" />
      </Button>
    </div>
  </header>
</template>

<style scoped>
.hero {
  display: grid;
  justify-items: start;
  gap: var(--space-block);
}

.headline {
  margin: 0;
  font-size: var(--text-2xl);
  font-weight: 500;
  line-height: 1.15;
  letter-spacing: -0.02em;
  text-wrap: balance;
}

.id {
  display: flex;
  align-items: center;
  gap: var(--space-item);
}

.avatar {
  width: 72px;
  height: 72px;
  box-shadow: 0 0 0 1px var(--line);
  font-size: var(--text-base);
  font-weight: 500;
}

h1 {
  margin: 0;
  font-size: var(--text-md);
  font-weight: 500;
  line-height: 1.4;
}

.id p {
  margin: var(--space-pair) 0 0;
}

.ctas {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-related);
}

@media (max-width: 600px) {
  .avatar {
    width: 64px;
    height: 64px;
  }
}
</style>
