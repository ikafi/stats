package fi.gosu.ika.stats.controller;

import fi.gosu.ika.stats.domain.Battle;
import fi.gosu.ika.stats.exceptions.BattleDeleteForbiddenException;
import fi.gosu.ika.stats.service.BattleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Battle Controller
 *
 * @author Ville Nupponen
 * @since 0.1.0
 */
@RestController
@RequestMapping("/battle/")
@CrossOrigin
public class BattleController {

    @Autowired
    private BattleService battleService;

    @RequestMapping(method = RequestMethod.GET)
    public List<Battle> getAll() {
        return battleService.findAll();
    }

    @RequestMapping(method = RequestMethod.POST)
    public Battle addBattle(@RequestBody Battle battle) {
        return battleService.addBattle(battle);
    }

    @RequestMapping(value = "{id}", method = RequestMethod.GET)
    public Battle getOne(@PathVariable Long id) {
        return battleService.findOne(id);
    }

    @RequestMapping(value = "{id}", method = RequestMethod.DELETE)
    public Battle delete(@PathVariable Long id) {
        throw new BattleDeleteForbiddenException();
    }
}
