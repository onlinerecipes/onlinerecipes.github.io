<div class="table-wrapper" markdown=1>

{:.nowrap}

|             | Throws exception | Returns false or null | Blocks      | Times out                    |
| ----------- | ---------------- | --------------------- | ----------- | ---------------------------- |
| **Insert**  | boolean add(e)   | boolean offer(e)      | void put(e) | boolean offer(e, time, unit) |
| **Remove**  | E remove()       | E poll()              | E take()    | E poll(time, unit)           |
| **Examine** | E element()      | E peek()              | N/A         | N/A                          |

</div>
