<script setup lang="ts">
const cols = ['Registered', 'Guest', 'Signed out']
const rows: [string, boolean[]][] = [
  ['/', [true, true, true]],
  ['/watch/:id', [true, true, false]],
  ['/account', [true, false, false]],
  ['/subscribe', [true, false, false]],
  ['/sign-in', [false, true, true]],
]
</script>

<template>
  <div class="v">
    <span class="tag">Each page declares who can see it</span>
    <table>
      <thead>
        <tr>
          <th />
          <th v-for="c in cols" :key="c" class="tag">{{ c }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="[route, cells] in rows" :key="route">
          <td class="tag route">{{ route }}</td>
          <td v-for="(ok, j) in cells" :key="j">
            <span :class="ok ? 'yes' : 'no'" />
          </td>
        </tr>
      </tbody>
    </table>
    <code class="node">definePageMeta({ auth: '<span class="accent">registered</span>' })</code>
  </div>
</template>

<style scoped>
.v {
  position: absolute;
  inset: 0;
  padding: 9% 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th {
  font-weight: 400;
  text-align: center;
  padding: 0 0 0.8em;
}

td {
  text-align: center;
  padding: 0.75em 0;
  border-top: 1px solid var(--d-line);
}

td.route {
  text-align: left;
  color: var(--d-ink);
}

.yes,
.no {
  display: inline-block;
  width: 0.7em;
  height: 0.7em;
  border-radius: 50%;
  vertical-align: middle;
}

.yes {
  background: var(--d-ink);
}

.no {
  border: 1px solid var(--d-line);
}

code {
  align-self: flex-start;
  font-family: var(--mono);
  font-size: 0.85em;
}
</style>
